import React from "react";

const BirthdayPeople = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt="image" />
            <div>
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default BirthdayPeople;
