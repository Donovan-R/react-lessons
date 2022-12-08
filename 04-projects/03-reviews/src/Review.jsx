import { useState } from "react";
import React from "react";
import reviews from "./data";
import { FcPrevious, FcNext } from "react-icons/fc";
import { BsChatQuote } from "react-icons/bs";

const Review = () => {
  // const [people, setPeople] = useState(reviews);
  const [index, setIndex] = useState(0);
  const { id, name, image, text, job } = reviews[index];

  const random = () => {
    const newIndex = Math.floor(Math.random() * reviews.length);
    let checkIndex = index;
    if (newIndex !== index) {
      checkIndex = newIndex;
    } else if (newIndex < reviews.length - 1) {
      checkIndex = newIndex + 1;
    } else if (newIndex < 0) {
      checkIndex = newIndex - 1;
    }
    return checkIndex;
  };

  return (
    <article className="review" key={id}>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <BsChatQuote />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() =>
            index > 0 ? setIndex(index - 1) : setIndex(reviews.length - 1)
          }
        >
          <FcPrevious />
        </button>
        <button
          className="next-btn"
          onClick={() =>
            index < reviews.length - 1 ? setIndex(index + 1) : setIndex(0)
          }
        >
          <FcNext />
        </button>
      </div>
      <button className="random-btn" onClick={() => setIndex(random())}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
