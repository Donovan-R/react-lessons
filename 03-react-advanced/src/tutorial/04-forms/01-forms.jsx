import React, { useState } from "react";

const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  //   attention à comment nous initialisons les states. Un message d'erreur peut arriver comme map n'est pas une fonction
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = {
        id: new Date().getTime().toString(),
        //   firstName: firstName, simplifié:
        firstName,
        // email: email, simplifié :
        email,
      };
      setPeople([...people, person]);
      setEmail("");
      setFirstName("");
    } else {
      console.log("valeurs vides");
    }
  };

  return (
    // <> les fragments ne servent pas si les éléments sont dans la même balise (ici article)
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Nom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            //  nous avons besoin d'un state et d'un onChange
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            // ici le onChange prend la valeur de l'input
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">ajouter une personne</button>
      </form>
      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
    // </>
  );
};

export default ControlledInputs;
