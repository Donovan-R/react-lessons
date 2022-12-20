import React, { useState, useContext, createContext, useEffect } from "react";
const url = "https://course-api.com/react-tours-project";

export const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [showMore, setShowMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  const getTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setIsLoading(false);
    setTours(tours);
  };

  useEffect(() => {
    getTours();
  }, []);

  return (
    <AppContext.Provider
      value={{
        showMore,
        setShowMore,
        isLoading,
        setIsLoading,
        tours,
        setTours,
        removeTour,
        getTours,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);

export default AppProvider;
