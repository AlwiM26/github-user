import React from "react";
import { BsBuilding, BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import './Content.css'

const Content = () => {
  return (
    <div className="content-container">
      <div className="profile-picture">
        <img src="https://avatars.githubusercontent.com/u/583231?v=4" alt="Profile picture" />
      </div>

      <div className="profile-info">
        <h2 className="name">Alwi Muhammad</h2>
        <p className="username">
          <a href="https://github.com/AlwiM26">@alwim26</a>
        </p>
        <p className="joined-at">Joined Jan 26, 2020</p>
      </div>

      <div className="bio">
        <p>This profile has no bio</p>
      </div>

      <div className="stats">
        <div className="stat">
          <p className="label">Repos</p>
          <p className="value">10</p>
        </div>
        <div className="stat">
          <p className="label">Followers</p>
          <p className="value">10</p>
        </div>
        <div className="stat">
          <p className="label">Following</p>
          <p className="value">10</p>
        </div>
      </div>

      <div className="contacts">
        <div className="contact">
          <IoLocationSharp />
          <p>Pekanbaru, Indonesia</p>
        </div>
        <div className="contact">
          <BsLink45Deg />
          <p>https://github.blog</p>
        </div>
        <div className="contact">
          <BsTwitter />
          <p>Not available</p>
        </div>
        <div className="contact">
          <BsBuilding />
          <p>Not available</p>
        </div>
      </div>
    </div>
  )
};

export default Content;