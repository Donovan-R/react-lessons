import { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturns = () => {
  const [user, setUser] = useState("utilisateur par défaut");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((erreur) => {
        console.log(erreur);
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>chargement</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h1>erreur</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{user ? user : `pas d'utilisateur`}</h1>
    </div>
  );
};

export default MultipleReturns;
