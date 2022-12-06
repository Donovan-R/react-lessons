import { useState } from "react";
import BirthdayPeople from "./Birthday";
import { data } from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <>
      <main>
        <section className="container">
          <h3>il y a {people.length} anniversaire(s)</h3>
          <BirthdayPeople people={people} />
          <button className="btn" onClick={() => setPeople([])}>
            tout supprimer
          </button>
        </section>
      </main>
    </>
  );
};

export default App;
