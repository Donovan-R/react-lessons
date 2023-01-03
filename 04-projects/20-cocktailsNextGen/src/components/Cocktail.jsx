import { Link } from "react-router-dom";

const Cocktail = ({ cocktail }) => {
  const { strGlass, idDrink, strDrink, strDrinkThumb, strInstructions } =
    cocktail;
  return (
    <article className="cocktail" id={idDrink}>
      <div className="img-container">
        <img src={strDrinkThumb} alt={strDrink} />
      </div>
      <div className="cocktail-footer">
        <h3>{strDrink}</h3>
        <h4>{strGlass}</h4>
        <p>{strInstructions}</p>
        <Link to={`/cocktails/${idDrink}`} className="btn btn-primary">
          details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
