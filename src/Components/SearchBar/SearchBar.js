import React from "react";
import { IoSearch } from 'react-icons/io5';

const SearchBar = () => {
  return (
    <div className="search-container">
      <IoSearch />
      <input type="search" placeholder="Github usename..." />
      <button>
        Search
      </button>
    </div>
  )
};

export default SearchBar;