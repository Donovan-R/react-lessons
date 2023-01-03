import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "../components/customHookFetch";
import Loading from "../components/Loading";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
const SingleCocktail = () => {
  const { singleCocktailId } = useParams();
  const { isLoading, data } = useFetch(`${url}${singleCocktailId}`);

  if (!isLoading) {
    const {
      strInstructions,
      strDrink,
      strCategory,
      strDrinkThumb,
      strGlass,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
    } = data.drinks[0];

    const ingredientsTab = [
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
    ];

    return (
      <section className="section coktail-section">
        <Link to="/">back home</Link>
        <h2 className="section-title">{strDrink}</h2>
        <div className="drink">
          <img src={strDrinkThumb} alt={strDrink} />
          <div className="drink-info">
            <p>
              <span className="drink-data">category</span>
              {strCategory}
            </p>
            <p>
              <span className="drink-data">instructions</span>
              {strInstructions}
            </p>
            <p>
              <span className="drink-data">glass</span>
              {strGlass}
            </p>
            <p>
              <span className="drink-data">instructions</span>
              {strInstructions}
            </p>
            <div>
              <p>
                <span className="drink-data">ingredients</span>
              </p>
              <ul>
                {ingredientsTab.map((item, index) =>
                  item ? <li key={index}>{item}</li> : ""
                )}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <Loading />;
  }
};

export default SingleCocktail;
