import React, { useState, useEffect } from "react";

// const url = "https://course-api.com/javascript-store-products";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(erreur);
    }
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { isLoading, data };
};

export default useFetch;
