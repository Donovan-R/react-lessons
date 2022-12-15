import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

const App = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");

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
    const oneItem = {
      id: new Date().getTime().toString(),
      item,
    };
    setItems([...items, oneItem]);
    showAlert(true, "success", "élément ajouté");
    setIsEditing(false);
    setEditId(null);
    setItem("");
  };

  // éditer
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const editItem = (id) => {
    setIsEditing(true);
    setEditId(id);
    const newItem = items.find((item) => item.id === id).item;
    setItem(newItem);
    showAlert(true, "success", "élément prêt à être modifié");
    setItems(items.map((item) => (item.id !== id ? item : newItem)));
  };

  //******* storage d'avant

  // function getLocalStorage() {
  //   const list = localStorage.getItem("list");
  //   if (list === null || list === undefined) {
  //     return [];
  //   } else {
  //     return JSON.parse(list);
  //   }
  // }

  // function addToLocalStorage(id, value) {
  //   const items = getLocalStorage();
  //   const item = { id, value };
  //   items.push(item);
  //   localStorage.setItem("list", JSON.stringify(items));
  // }

  // function removeFromLocalStorage(id) {
  //   const items = getLocalStorage();
  //   const out = items.filter((item) => item.id !== id);
  //   localStorage.setItem("list", JSON.stringify(out));
  // }

  // function editLocalStorage(id, value) {
  //   const items = getLocalStorage();
  //   const newItems = items.map(function (item) {
  //     if (item.id === id) {
  //       item.value = value;
  //     }
  //     return item;
  //   });
  //   localStorage.setItem("list", JSON.stringify(newItems));
  // }

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
