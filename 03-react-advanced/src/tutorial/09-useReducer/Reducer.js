// fonction dans un fichier à part car comportera plusieurs fonctionalités
import { ADD_ITEM, NO_VALUE, REMOVE_ITEM, CLOSE_MODAL } from "./actions";
export const reducer = (state, action) => {
  if (action.type === ADD_ITEM) {
    const newPeople = [...state.people, action.payload];
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item ajouté",
    };
  }

  if (action.type === NO_VALUE) {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "veuillez entrer une valeur valide",
    };
  }

  if (action.type === CLOSE_MODAL) {
    return { ...state, isModalOpen: false };
  }

  if (action.type === REMOVE_ITEM) {
    const newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return {
      ...state,
      people: newPeople,
      isModalOpen: true,
      modalContent: "item supprimé",
    };
  }
  throw new Error("il n'y a pas d'action correspondante");
};
