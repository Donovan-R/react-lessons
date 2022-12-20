import { useGlobalContext } from "./context";
import Tours from "./Tours";
import Loading from "./Loading";

const App = () => {
  const { tours, isLoading, getTours } = useGlobalContext();

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (!tours.length) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={getTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours />
    </main>
  );
};
export default App;
