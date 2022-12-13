import { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log(size);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
    // le return appelle le clean up nous ne la nommons pas directement
    // le resize est un event comme un click par exemple
  });

  return (
    <>
      <h1>fenêtre</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanup;
