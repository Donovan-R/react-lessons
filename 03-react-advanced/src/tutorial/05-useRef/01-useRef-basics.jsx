import React, { useEffect, useState, useRef } from "react";
// préserve les valeurs comme useState
// ne déclenche pas de rendu
// cible des éléments dans le DOM

const useRefBasics = () => {
  const inputRef = useRef(null);
  console.log(inputRef);
  const pRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    inputRef.current.focus();
    // inputRef.current = l'input ici/ le champs à renseigner
  });
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">soumettre</button>
      </form>
      <p ref={pRef}>hello world</p>
    </>
  );
};

export default useRefBasics;
