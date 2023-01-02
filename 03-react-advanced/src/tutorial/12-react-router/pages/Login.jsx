import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) return;
    setUser({ name });
    navigate("/dashboard");
  };
  return (
    <section className="section">
      <form action="" className="form" onSubmit={handleSubmit}>
        <h5>connexion</h5>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            nom d'utilisateur
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            mdp
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn btn-block">
            se connecter
          </button>
        </div>
      </form>
    </section>
  );
};

export default Login;
