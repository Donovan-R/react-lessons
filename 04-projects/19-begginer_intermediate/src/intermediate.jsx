import React, { useState, useEffect } from "react";

const url = "https://randomuser.me/api/?results=20";

const Intermediate = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const { results: data } = await response.json();
      setUsers(data);
      setIsLoading(false);
    } catch (error) {
      console.log("erreur");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  // const usersSort = (id) => {
  //   const newUsers = users.map((item) => {
  //     return (item = { id } ? { id } : item);
  //   });
  //   return newUsers;
  // };

  if (isLoading) {
    return <p>chargement</p>;
  }

  return (
    <>
      <div className="users20">
        <table className="locationInfos">
          <thead>
            <tr>
              <th>
                <button
                  id="name"
                  onClick={(e) => console.log(e.currentTarget.id)}
                >
                  name
                </button>
              </th>
              <th>
                <button onClick={() => console.log("hello")}>country</button>
              </th>
              <th>
                <button onClick={() => console.log("hello")}>postcode</button>
              </th>
              <th>
                <button onClick={() => console.log("hello")}>state</button>
              </th>
              <th>
                <button onClick={() => console.log("hello")}>city</button>
              </th>
              <th>
                <button
                  id="street"
                  onClick={() =>
                    console.log(
                      (document.documentElement.className = "street").innerHTML
                    )
                  }
                >
                  street
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
              const {
                name: { first, last },
                location: {
                  city,
                  country,
                  state,
                  postcode,
                  street: { number, name },
                },
              } = item;
              return (
                <tr key={index}>
                  {first}, {last}
                  <td>{country}</td>
                  <td>{postcode}</td>
                  <td>{state}</td>
                  <td>{city}</td>
                  <td className="street">
                    {number}, {name}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Intermediate;
