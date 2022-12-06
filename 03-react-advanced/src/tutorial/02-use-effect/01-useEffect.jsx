import { useState, useEffect } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `nouveaux messages ((${value})`;
    }
  }, [value]);

  return (
    <>
      <h1> {value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        clique moi
      </button>
    </>
  );
};
export default UseEffectBasics;
