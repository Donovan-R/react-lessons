import React from "react";
// const [showMore, setShowMore] = useState(false);

const Tour = (props) => {
  const { image, name, id, info, price } = props;
  console.log("info");
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4>{price}</h4>
        </div>
        <p> {info}</p>
        <button className="delete-btn" onClick={() => removeTour}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
