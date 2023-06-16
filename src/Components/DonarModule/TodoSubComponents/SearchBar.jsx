import React, { useState } from "react";
import "./SearchBar.css";
const SearchBar = (props) => {
  const [searchtxt, setSearchtxt] = useState("");

  const SubmitSearch = (e) => {
    e.preventDefault();
    if (searchtxt !== "") {
      props.searchHandler(searchtxt);
    }
  };

  return (
    <form className="d-flex" role="search">
      <input
        onChange={(e) => {
          setSearchtxt(e.target.value);
          e.preventDefault();
        }}
        value={searchtxt}
        name="search"
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        id="search"
      />

      <button
        className="btn btn-outline-primary"
        type="submit"
        onClick={SubmitSearch}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
