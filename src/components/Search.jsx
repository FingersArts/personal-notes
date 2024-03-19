import React from "react";

function Search({ onSearch, inputSearch }) {
  return (
    <input
      type="text"
      className="note-search"
      placeholder="Search..."
      value={inputSearch}
      onChange={onSearch}
    />
  );
}

export default Search;
