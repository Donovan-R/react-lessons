import React from "react";

const SearchForm = ({ search, setSearch }) => {
  return (
    <section className="section search">
      <form
        action=""
        className="search-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-control">
          <label htmlFor="search">search for your favorite</label>
          <input
            type="text"
            id="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
