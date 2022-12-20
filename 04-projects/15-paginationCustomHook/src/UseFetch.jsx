import React, { useState, useEffect } from "react";
import paginate from "./utils";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getFollowers = async (url) => {
    setIsLoading(true);

    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setData(paginate(data));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getFollowers(url);
  }, [url]);
  return { isLoading, data };
};

export default useFetch;
