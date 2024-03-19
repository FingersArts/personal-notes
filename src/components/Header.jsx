import React from "react";
import Search from "./Search";

function Header({ inputSearch, onSearch }) {
  return (
    <div className="note__header">
      <h1>My Notes</h1>
      <Search inputSearch={inputSearch} onSearch={onSearch} />
    </div>
  );
}

export default Header;
