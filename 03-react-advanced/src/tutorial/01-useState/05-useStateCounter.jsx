import { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexeIncrease = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h2>{value}</h2>
        <button className="btn" onClick={() => setValue(value - 1)}>
          décrementer
        </button>
        <button className="btn" onClick={() => setValue(0)}>
          reset
        </button>
        <button className="btn" onClick={() => setValue(value + 1)}>
          incrémenter
        </button>
      </section>

      <section style={{ margin: "5rem 0", backgroundColor: "darkslategrey" }}>
        <h2>{value}</h2>

        <button className="btn" onClick={() => complexeIncrease()}>
          incrémenter
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
