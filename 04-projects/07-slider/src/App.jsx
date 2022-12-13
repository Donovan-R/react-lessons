import React, { useState, useEffect } from "react";
import people from "./data";
import { GrNext, GrPrevious } from "react-icons/gr";
import { FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [persons, setPersons] = useState(people);
  const [indexPers, setIndexPers] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexPers(indexPers !== persons.length - 1 ? indexPers + 1 : 0);
    }, 5000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span>/</span>Reviews
          </h2>
        </div>
        <div className="section-center">
          {persons.map((person, index) => {
            const { id, name, image, title, quote } = person;
            {
              let position = "nextSlide";
              if (indexPers === index) {
                position = "activeSlide";
              }
              console.log(position, index, { id }, { index });
              if (
                index === indexPers - 1 ||
                (indexPers === 0 && index === persons.length - 1)
              ) {
                position = "lastSlide";
              }
              return (
                <article key={id} className={position}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  <i className="icon">
                    <FaQuoteRight />
                  </i>
                </article>
              );
            }
          })}
          <button
            className="prev"
            onClick={() =>
              setIndexPers(indexPers !== 0 ? indexPers - 1 : persons.length - 1)
            }
          >
            <GrPrevious />
          </button>
          <button
            className="next"
            onClick={() =>
              setIndexPers(indexPers !== persons.length - 1 ? indexPers + 1 : 0)
            }
          >
            <GrNext />
          </button>
        </div>
      </section>
    </>
  );
};

export default App;
