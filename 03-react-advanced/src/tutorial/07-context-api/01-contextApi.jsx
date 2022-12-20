import React, { useState, useContext, createContext } from "react";
import { data } from "../../data";

const PersonContext = createContext();

const ContextAPI = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople(people.filter((person) => person.id != id));
  };
  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <section>
        <h3>prop ContextAPI</h3>
        <List />
      </section>
    </PersonContext.Provider>
  );
};

const List = () => {
  const { people } = useContext(PersonContext);

  return (
    <>
      {people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}{" "}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>supprimer</button>
    </div>
  );
};

export default ContextAPI;
