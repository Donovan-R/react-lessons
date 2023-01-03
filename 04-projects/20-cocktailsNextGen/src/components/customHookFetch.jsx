import React, { useState, useEffect, useCallback } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = useCallback(
    async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(erreur);
      }
    },
    [url]
  );

  useEffect(() => {
    getData(url);
  }, [getData, url]);

  return { isLoading, data };
};

export default useFetch;
