import React, { useState } from "react";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handeleKeyword(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <form className="dictionary" onSubmit={search}>
        <input type="search" onChange={handeleKeyword} />
      </form>
    </div>
  );
}
