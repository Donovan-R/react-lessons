import React from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Question = ({ id, title, info, handleClick, showInfo }) => {
  return (
    <article className="question" key={id}>
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => handleClick(id)}>
          {showInfo ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
        </button>
      </header>
      {showInfo ? <p>{info}</p> : ""}
    </article>
  );
};

export default Question;
