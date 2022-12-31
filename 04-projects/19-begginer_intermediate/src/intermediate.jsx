import React, { useState, useEffect } from "react";

const url = "https://randomuser.me/api/?results=20";

const Intermediate = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUsers = async () => {
    try {
      const response = await fetch(url);
      const { results: data } = await response.json();
      console.log(data);
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

  if (isLoading) {
    return <p>chargement</p>;
  }

  return (
    <>
      <div className="users20">
        <table className="locationInfos">
          <thead>
            <th>name</th>
            <th>country</th>
            <th>postcode</th>
            <th>state</th>
            <th>city</th>
          </thead>
          <tbody>
            {users.map((item, index) => {
              const {
                name: { first, last },
                location: { city, country, state, postcode },
              } = item;
              return (
                <tr key={index}>
                  {first}, {last}
                  <td>{country}</td>
                  <td>{postcode}</td>
                  <td>{state}</td>
                  <td>{city}</td>
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
