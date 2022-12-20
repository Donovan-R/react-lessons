import React from "react";
import Tour from "./Tour";
import { useGlobalContext } from "./context";

const Tours = () => {
  const { removeTour, tours } = useGlobalContext();
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
