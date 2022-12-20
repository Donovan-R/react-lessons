import { data } from "../../data";
import { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./Reducer";
import { ADD_ITEM, NO_VALUE, REMOVE_ITEM, CLOSE_MODAL } from "./actions";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const Index = () => {
  const [name, setName] = useState("");
  //   const [people, setPeople] = useState(data);
  //   const [showModal, setShowModal] = useState(false);
  const [state, dispatch] = useReducer(reducer, defaultState);
  // 2 paramètres, fonction et state que l'on initialise
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const person = { name, id: new Date().getTime().toString() };
      dispatch({ type: ADD_ITEM, payload: person });
      setName("");
    } else {
      dispatch({ type: NO_VALUE });
    }
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form action="" className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          ajouter
        </button>
      </form>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => dispatch({ type: REMOVE_ITEM, payload: id })}
            >
              supprimer
            </button>
          </div>
        );
      })}
    </>
  );
};
export default Index;
