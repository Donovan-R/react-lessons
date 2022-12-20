import React, { useState } from "react";
import { data } from "../../data";

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };
  return (
    <section>
      <h3>prop PropDrilling</h3>
      <List people={people} />
    </section>
  );
};

const List = ({ people, removePerson }) => {
  console.log(people);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}{" "}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default PropDrilling;
