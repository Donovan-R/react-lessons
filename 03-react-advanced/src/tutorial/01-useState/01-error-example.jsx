const Final = () => {
  let title = "titre au pif";
  const handleClick = () => {
    title = "bonjour";
  };
  return (
    <>
      <h2>{title}</h2>
      <button className="btn" onClick={handleClick}>
        changer le titre
      </button>
    </>
  );
};

export default Final;
