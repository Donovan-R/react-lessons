import React, { useState, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";
const AppContext = React.createContext();
const defaultState = {
  loading: false,
  cart: [],
  total: 0,
  amount: 4,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeAll = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  useEffect(() => {
    dispatch({ type: "LOADING" });
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: "DISPLAY_ITEMS", payload: data }));
  }, []);
  // place du reducer

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeAll,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
