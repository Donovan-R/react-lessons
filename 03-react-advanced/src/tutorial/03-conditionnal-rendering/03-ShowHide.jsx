import { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        montrer/cacher
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>fenêtre</h2>
      <h2>largeur: {size} px </h2>
    </div>
  );
};

export default ShowHide;
