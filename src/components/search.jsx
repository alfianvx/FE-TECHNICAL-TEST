import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform the search logic here using the query string
    // For example, you can make an API call to fetch users based on the query

    // Reset the query after performing the search
    setQuery("");
  };

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="w-1/2 px-2 py-1 my-2 border border-black md:w-1/3 placeholder:text-black focus:outline-none"
        placeholder="Cari User"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </>
  );
};

export default Search;
