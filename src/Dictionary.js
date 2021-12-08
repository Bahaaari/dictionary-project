import axios from "axios";
import React, { useState } from "react";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/
    let apiURL = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiURL).then(handleResponse);
  }

  function handeleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form className="dictionary" onSubmit={search}>
        <input type="search" onChange={handeleKeyword} />
      </form>
      <Results results={results} />
    </div>
  );
}
