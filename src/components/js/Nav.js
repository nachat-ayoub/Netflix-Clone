import React, { useEffect, useState } from "react";

import "../css/Nav.css";

const Nav = () => {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShown(true);
      } else {
        setShown(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`Nav ${shown && "nav_black"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="avatar avatar_hover"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Avatar"
      />
      <div className="menu">
        <div className="info">
          <img
            className="avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Netflix Avatar"
          />
          <h2 className="username">Ayoub</h2>
        </div>
        <a className="link" href="#sign-out">
          Sign Out
        </a>
      </div>
    </nav>
  );
};

export default Nav;
