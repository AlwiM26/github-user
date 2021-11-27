import React from "react";
import { MdLightMode } from "react-icons/md";
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-logo">GithubProfile()</div>
      <div className="theme-container">
        <h1>Light</h1>
        <MdLightMode size={"3em"} />
      </div>
    </div>
  )
};

export default Header;