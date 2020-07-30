import React from 'react';
import logoIcon from '../assets/logo/icon.svg';
import logoText from '../assets/logo/text.svg';
import { Link } from 'gatsby';

const Header = (props) => {
    return (
        <div id="banner" className="banner">
            <div className="container">
                <Link to="/">
                    <img alt="Logo Icon" className="logoIcon" height="50px" src={logoIcon} />
                    <img alt="Logo Text" className="logoText" height="35px" src={logoText} />
                </Link>
            </div>
        </div>
    );
}

export default Header;