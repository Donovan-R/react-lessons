import { useState, useEffect, useContext, createContext } from "react";
import menu from "./data";
export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);

  const filterItems = (category) => {
    if (category !== "all") {
      setMenuItems(
        menu.filter((item) => (item.category === category ? item : ""))
      );
    } else {
      setMenuItems(menu);
    }
  };

  return (
    <AppContext.Provider
      value={{
        filterItems,
        menuItems,
        setMenuItems,
        categories,
        setCategories,
        menu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export default AppProvider;
