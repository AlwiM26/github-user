import React from "react";
import { IoSearch } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-container">
      <div className="search-input">
        <IoSearch color="#0079FF" size="2em" />
        <input className="user-input" type="search" placeholder="Github username..." />
      </div>
      <div className="btn-search-container">
        <button className="btn-search">
          Search
        </button>
      </div>
    </div>
  )
};

export default SearchBar;