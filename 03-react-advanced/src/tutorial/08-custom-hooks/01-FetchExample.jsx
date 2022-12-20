import React, { useState, useEffect } from "react";
import useFetch from "./02-useFetch";

const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [products, setProducts] = useState([]);

  // const getProducts = async () => {
  //   const response = await fetch(url);
  //   const products = await response.json();
  //   setProducts(products);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getProducts();
  // }, []);

  const { isLoading, data: products } = useFetch(url);
  console.log(products);

  return (
    <div>
      <h2>{isLoading ? "chargement.." : "données"}</h2>
    </div>
  );
};

export default FetchExample;
