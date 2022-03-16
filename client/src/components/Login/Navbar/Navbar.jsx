import React from "react";
import Scroll from "./../../Scroll/Scroll";

import github from "../../../assets/github.png";
import spotify from "../../../assets/spotify.png";

import { AUTH_URL } from "../../Login/Login";

import "./navbar.css";

export default function Navbar(props) {
  const redirect = () => {
    const redirecting = document.querySelector(".redirecting");
    redirecting.classList.remove("hidden");

    setTimeout(() => {
      window.location = AUTH_URL;
    }, 1000);
  };

  return (
    <div className="navbar">
      <div className="navleft">
        <img src={spotify} alt="" className="spotify-logo" />
        &nbsp; Custom Playlists
      </div>

      <div className="navmid">
        <Scroll 
          to="docs"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          text="Documentation"
        />
        <Scroll
          to="redirecting"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          fx={redirect}
          text="Log In"
          className="login-btn"
        />
      </div>

      <div className="navright">
        <a
          href="https://github.com/hardikmirg"
          target="_blank"
          rel="noopener norefferer"
        >
          <img src={github} className="github-logo" alt="" />
        </a>
      </div>
    </div>
  );
}
