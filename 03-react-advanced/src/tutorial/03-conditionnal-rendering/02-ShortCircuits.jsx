import { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("peter");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello people";
  return (
    <>
      <h2>{text || "hello world"}</h2>
      <h2>{text ? text : "hello world"}</h2>
      <h2>valeur: {text && "hello world"}</h2>
      <p>{undefined}</p>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle erreur{" "}
      </button>
      {isError ? (
        <p>il y a erreur</p>
      ) : (
        <div>
          <h2>pas d'erreur</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
