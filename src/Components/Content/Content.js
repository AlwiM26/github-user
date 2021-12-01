import React, { useEffect, useState } from "react";
import { BsBuilding, BsLink45Deg, BsTwitter } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import './Content.css'

const Content = ({ userData, loading }) => {
  const { avatar_url, name, login, created_at, bio, public_repos, followers, following, location, twitter_username, blog, company } = userData;

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const joined = !created_at ? "" : dateFormatter.format(new Date(created_at));

  return (
    <div className="content-container">
      {loading ? <h1>loading...</h1> :
        <>
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
              <IoLocationSharp size={"1.3em"} />
              <p className={!location ? "disabled" : ""}>{!location ? "Not Available" : location}</p>
            </div>
            <div className="contact">
              <BsLink45Deg size={"1.3em"} />
              <p className={!blog ? "disabled" : ""}>{!blog ? "Not Available" : <a href={blog} style={{ color: 'white' }} target="_blank">{blog}</a>}</p>
            </div>
            <div className="contact">
              <BsTwitter size={"1.3em"} />
              <p className={!twitter_username ? "disabled" : ""}>{!twitter_username ? "Not Available" : <a href={`https://twitter.com/${twitter_username}`} style={{ color: 'white' }} target="_blank">{twitter_username}</a>}</p>
            </div>
            <div className="contact">
              <BsBuilding size={"1.3em"} />
              <p className={!company ? "disabled" : ""}>{!company ? "Not Available" : company}</p>
            </div>
          </div>
        </>
      }
    </div>
  )
};

export default Content;