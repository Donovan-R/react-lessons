import { useState, useEffect } from "react";
import useFetch from "./UseFetch";
import Follower from "./Follower";
const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const App = () => {
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);
  const { isLoading, data } = useFetch(url);

  const prevPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage - 1;

      if (oldPage <= 0) {
        newPage = followers.length - 1;
      }

      return newPage;
    });
  };

  const nextPage = () => {
    setPage((oldPage) => {
      let newPage = oldPage + 1;

      if (oldPage >= followers.length - 1) {
        newPage = 0;
      }

      return newPage;
    });
  };

  useEffect(() => {
    if (isLoading) return;

    setFollowers(data[page]);
  }, [isLoading, data, page]);

  return (
    <main>
      <div className="section-title">
        <h1>{isLoading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => (
            <Follower key={follower.id} {...follower} />
          ))}
        </div>
        {!isLoading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              préc
            </button>
            {followers.map((_, i) => (
              <button
                key={i}
                className={`page-btn${page === i ? " active-btn" : ""}`}
                onClick={() => setPage(i)}
              >
                {i + 1}
              </button>
            ))}
            <button className="next-btn" onClick={nextPage}>
              suiv
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default App;
