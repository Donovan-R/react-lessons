import React, { useState } from "react";
import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";
import useFetch from "../components/customHookFetch";
import Loading from "../components/Loading";
import { useEffect } from "react";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const Home = () => {
  const [search, setSearch] = useState("");
  const {
    isLoading,
    data: { drinks },
  } = useFetch(`${url}${search}`);

  if (isLoading) {
    return <Loading />;
  }

  if (!drinks) {
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    );
  }

  return (
    <main>
      <SearchForm search={search} setSearch={setSearch} />
      <CocktailList cocktails={drinks} />
    </main>
  );
};

export default Home;
