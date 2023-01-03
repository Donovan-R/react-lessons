import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = ({ cocktails }) => {
  return (
    <section className="section">
      <h2 className="section-title"></h2>
      <div className="cocktails-center">
        {cocktails.map((cocktail) => (
          <Cocktail cocktail={cocktail} key={cocktail.idDrink} />
        ))}
      </div>
    </section>
  );
};

export default CocktailList;
