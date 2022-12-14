import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";

const List = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.map((oneItem) => {
        const { item, id } = oneItem;
        if (item) {
          return (
            <article className="grocery-item" key={id}>
              <p className="title">{item}</p>
              <div className="btn-container">
                <button className="edit-btn" onClick={() => console.log(id)}>
                  <FaEdit />
                </button>
                <button className="delete-btn" onClick={() => removeItem(id)}>
                  <MdOutlineDeleteForever />
                </button>
              </div>
            </article>
          );
        } else {
          ("");
        }
      })}
    </div>
  );
};

export default List;
