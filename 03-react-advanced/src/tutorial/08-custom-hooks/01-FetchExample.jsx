import React, { useState, useEffect } from "react";

const url = "https://course-api.com/javascript-store-products";

const FetchExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h2>{isLoading ? "chargement.." : "données"}</h2>
    </div>
  );
};

export default FetchExample;
