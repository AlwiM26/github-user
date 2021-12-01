import React, { useState } from "react";
import { IoSearch } from 'react-icons/io5';
import './SearchBar.css';

const SearchBar = (props) => {
  const { setUserName } = props;
  const [input, setInput] = useState("");

  return (
    <div className="search-container">
      <div className="search-input">
        <IoSearch color="#0079FF" size="2em" />
        <input className="user-input" type="search" placeholder="Github username..." onChange={event => setInput(event.target.value)} />
      </div>
      <div className="btn-search-container">
        <button className="btn-search" onClick={() => setUserName(input)}>
          Search
        </button>
      </div>
    </div>
  )
};

export default SearchBar;