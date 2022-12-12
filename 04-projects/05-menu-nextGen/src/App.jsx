import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import menu from "./data";

const allCategories = ["all", ...new Set(menu.map((item) => item.category))];

const App = () => {
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
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={allCategories} filterItems={filterItems} />
        <Menu menu={menuItems} />
      </section>
    </main>
  );
};

export default App;
