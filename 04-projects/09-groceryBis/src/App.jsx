import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list === null || list === undefined) {
    return [];
  } else {
    return JSON.parse(list);
  }
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage());
  const [item, setItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(items));
  }, [items]);

  // les alertes

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
    // ...alert pour ne modifier que ce que nous voulons
  };

  // retirer un article et tous
  const removeItem = (id) => {
    const newItems = items.filter((item) => (item.id !== id ? item : ""));
    setItems(newItems);
    showAlert(true, "danger", "élément supprimé");
  };

  const clearList = () => {
    setItems([]);
    showAlert(true, "danger", "liste supprimée");
  };

  // fin retrait

  // génération items avec id

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item) {
      const oneItem = {
        id: new Date().getTime().toString(),
        item,
      };
      setItems([...items, oneItem]);
      showAlert(true, "success", "élément ajouté");
      if (isEditing) {
        console.log(editId);
        const newTab = items.map((oneItem) =>
          oneItem.id === editId ? { ...oneItem, item } : oneItem
        );
        setItems(newTab);
        setIsEditing(false);
        setEditId(null);
      }

      setItem("");
    } else {
      showAlert(true, "danger", "saisie non valide");
    }
  };

  // éditer

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    const newItem = items.find((item) => item.id === id);
    setItem(newItem.item);
    showAlert(true, "success", "élément prêt à être modifié");
  };

  return (
    <section className="section-center">
      <form action="" className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} list={items} />
        )}
        <h3> Faites vos emplettes avec DonoMarket</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button className="submit-btn">
            {isEditing ? "modifier l'élément" : "ajouter l'élément"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={items} removeItem={removeItem} editItem={editItem} />
        {items.length > 1 ? (
          <button className="clear-btn" onClick={clearList}>
            Tout supprimer
          </button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default App;
