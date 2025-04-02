import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <input
      type="text"
      placeholder="Search profiles..."
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        onSearch(e.target.value);
      }}
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
