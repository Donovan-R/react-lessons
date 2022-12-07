import { useState, useEffect } from "react";
import Tours from "./Tours";
import Tour from "./Tour";
// import Loading from "./Loading";
const url = "https://course-api.com/react-tours-project";
// const [isLoading, setIsLoading] = useState(true);

const App = () => {
  const [tours, setTours] = useState([]);
  const getTours = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    // setIsLoading(false);
  };
  useEffect(() => {
    getTours();
  }, []);

  // if (isLoading) {
  //   <main>
  //     <Loading />
  //   </main>;
  // }

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  if (!tours.length) {
    <main>
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={getTours}>
          refresh
        </button>
      </div>
    </main>;
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
      <Tour removeTour={removeTour} />
    </main>
  );
};
export default App;
