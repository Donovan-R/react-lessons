import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Number(count) <= 8 && Number(count) > 0) {
      setText(data.slice(0, Number(count)));
    } else if (Number(count) <= 0) {
      setText(data.slice(0, 1));
    } else {
      setText(data.slice(0, 8));
    }
  };

  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum</h3>
        <form action="" className="lorem-form">
          <label htmlFor="paragraphs">paragraphes</label>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn" onClick={handleSubmit}>
            generate
          </button>
        </form>
        <article className="lorem-text">
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </section>
    </>
  );
};

export default App;
