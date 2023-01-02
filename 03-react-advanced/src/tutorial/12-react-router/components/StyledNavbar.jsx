import { NavLink } from "react-router-dom";
const StyledNavbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        À propos
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        Produits
      </NavLink>
      <NavLink
        to="/login"
        style={({ isActive }) => {
          return { color: isActive ? "red" : "grey" };
        }}
      >
        se connecter
      </NavLink>
    </nav>
  );
};

export default StyledNavbar;
