import React, { useEffect, useState } from "react";
import { BsBuilding, BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import './Content.css'

const Content = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://api.github.com/users/octocat`);
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const { avatar_url, name, login, created_at, bio, public_repos, followers, following, location, twitter_username, html_url, company } = data;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const joined = !created_at ? "" : dateFormatter.format(new Date(created_at));

  return (
    <div className="content-container">
      <div className="profile-picture">
        <img src={avatar_url} alt="Profile picture" />
      </div>

      <div className="profile-info">
        <h2 className="name">{name}</h2>
        <p className="username">
          <a href={`https://github.com/${login}`}>@{login}</a>
        </p>
        <p className="joined-at">{joined}</p>
      </div>

      <div className="bio">
        <p className={!bio ? "disabled" : ""}>{!bio ? "This profile has no bio" : bio}</p>
      </div>

      <div className="stats">
        <div className="stat">
          <p className="label">Repos</p>
          <p className="value">{public_repos}</p>
        </div>
        <div className="stat">
          <p className="label">Followers</p>
          <p className="value">{followers}</p>
        </div>
        <div className="stat">
          <p className="label">Following</p>
          <p className="value">{following}</p>
        </div>
      </div>

      <div className="contacts">
        <div className="contact">
          <IoLocationSharp />
          <p className={!location ? "disabled" : ""}>{!location ? "Not Available" : location}</p>
        </div>
        <div className="contact">
          <BsLink45Deg />
          <p className={!html_url ? "disabled" : ""}>{!html_url ? "Not Available" : html_url}</p>
        </div>
        <div className="contact">
          <BsTwitter />
          <p className={!twitter_username ? "disabled" : ""}>{!twitter_username ? "Not Available" : twitter_username}</p>
        </div>
        <div className="contact">
          <BsBuilding />
          <p className={!company ? "disabled" : ""}>{!company ? "Not Available" : company}</p>
        </div>
      </div>
    </div>
  )
};

export default Content;