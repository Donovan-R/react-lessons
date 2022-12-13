import React, { useState } from "react";

const Multipleinputs = () => {
  const [people, setPeople] = useState([]);

  // const [firstName, setFirstName] = useState("");
  // const [email, setEmail] = useState("");
  // const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person;
    if (firstName && email && age) {
      const newperson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newperson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else {
      console.log("valeurs vides");
    }
  };

  return (
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Nom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            //  nous avons besoin d'un state et d'un onChange
            value={person.firstName}
            onChange={handleChange}
            // ici le onChange prend la valeur de l'input
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age :</label>
          <input
            type="number"
            id="age"
            name="age"
            value={person.age}
            onChange={handleChange}
          />
        </div>
        <button type="submit">ajouter une personne</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{age}</p>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
    // </>
  );
};

export default Multipleinputs;
