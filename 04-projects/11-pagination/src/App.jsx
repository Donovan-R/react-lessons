import React, { useEffect, useState } from "react";
import paginate from "./utils";
import Follower from "./Follower";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const App = () => {
  const [isloading, setIsloading] = useState(true);
  const [page, setPage] = useState(3);
  const [followers, setFollowers] = useState([]);

  const getFollowers = async () => {
    try {
      const response = await fetch(url);
      const followers = await response.json();
      setIsloading(false);
      setFollowers(paginate(followers)[page]);
    } catch (error) {
      setIsloading(false);
      console.log("erreur");
    }
  };

  useEffect(() => {
    getFollowers();
  }, [page]);

  return (
    <>
      <main className="section-title">
        <div className="section-title">
          <h1>{isloading ? "loading..." : "pagination"}</h1>
          <div className="underline"></div>
        </div>
        <section className="followers">
          <div className="container">
            {followers.map((follower) => (
              <Follower follower={follower} key={follower.id} />
            ))}
          </div>
          {!isloading && (
            <div className="btn-container">
              <button
                className="prev-btn"
                onClick={() => (page > 0 ? setPage(page - 1) : setPage(9))}
              >
                préc
              </button>

              {followers.map((_, i) => (
                <button
                  className={`page-btn${page === i ? " active-btn" : ""}`}
                  key={i}
                  onClick={(e) =>
                    setPage(Number(e.currentTarget.textContent) - 1)
                  }
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="next-btn"
                onClick={() =>
                  page < followers.length - 1 ? setPage(page + 1) : setPage(0)
                }
              >
                suiv
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
