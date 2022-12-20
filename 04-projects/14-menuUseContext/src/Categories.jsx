import React from "react";
import { useGlobalContext } from "./context";

const Categories = () => {
  const { categories, filterItems } = useGlobalContext();
  console.log(filterItems);
  return (
    <>
      <div className="btn-container">
        {categories.map((category, index) => {
          return (
            <button
              className="filter-btn"
              data-id={category}
              key={index}
              onClick={() => filterItems(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
