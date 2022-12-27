import React, { useState, useEffect, useCallback } from "react";

const url = "https://randomuser.me/api?page=";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isloading, setIsloading] = useState(true);

  const getUser = useCallback(async (url) => {
    try {
      const response = await fetch(url);
      const {
        results: [user],
      } = await response.json();
      setUser(user);
      setIsloading(false);
      setUsers((users) => [...users, user]);
    } catch (error) {
      console.log("erreur");
    }
  }, []);

  useEffect(() => {
    getUser(`${url}${page}`);
  }, [page, getUser]);

  if (isloading) {
    return <p>chargement</p>;
  }

  return (
    <>
      <section className="beginner">
        <div className="counter">
          <h2>débutant</h2>
          <h3>counter</h3>
          <span>{counter}</span>
          <br />
          <button className="plus" onClick={() => setCounter(counter + 1)}>
            incrémenter
          </button>
        </div>
        <div className="API">
          <pre>{JSON.stringify(user, null, 2)}</pre>
          <div>
            {users.map((item, index) => {
              const {
                picture: { medium: image },
                name: { first, last },
              } = item;
              return (
                <article key={index}>
                  <img src={image} alt="" />
                  <h2>
                    {first}, {last}
                  </h2>
                </article>
              );
            })}
          </div>
        </div>
        <div>
          <button onClick={() => setPage(page + 1)}>nouvelle page</button>
        </div>
      </section>
    </>
  );
};

/* {users.map((user) => {
              const { gender, name, location, coordinates } = user;
              return (
                <ul>
                  <li>{gender}</li>
                  <li>{name}</li>
                  <li>{location}</li>
                  <li>{coordinates}</li>
                </ul>
              );
            })} */

export default App;
