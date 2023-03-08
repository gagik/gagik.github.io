import React from 'react';
import { Link } from 'gatsby';
import logoIcon from '../assets/logo/icon.svg';
import logoText from '../assets/logo/text.svg';

function Header() {
  return (
    <div id="start" className="banner">
      <div className="container">
        <Link to="/">
          <img
            alt="Logo Icon"
            className="logoIcon"
            height="50px"
            src={logoIcon}
          />
          <img
            alt="Logo Text"
            className="logoText"
            height="35px"
            src={logoText}
          />
        </Link>
      </div>
    </div>
  );
}

export default Header;
