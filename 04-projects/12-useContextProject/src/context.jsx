import React, { useState, useContext, createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <AppContext.Provider
      value={{ isModalOpen, isSidebarOpen, setIsModalOpen, setIsSidebarOpen }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
