import React from 'react';
import style from '../styles/modules/footer.module.scss';
import icon from '../assets/logo/icon_black.svg';
import { useStaticQuery } from 'gatsby';

const Footer = (props) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          links
        }
      }
    }
    `).site.siteMetadata;
    console.log(data);
    const links = data.links.map((link) => (
        <a href={link[1]}>{link[0]}</a>
    ));
    const flipped = props.flipped ? " " + style.flipped : "";
    return (
        <div className={style.footer + flipped}>
            <div className={style.logo}>
                <img height="85px" src={icon}></img>
            </div>
            <div className="container">
            <div className={style.left}>
                © {new Date().getFullYear()} Gagik Amaryan
            </div>
            <div className={style.right}>
                {links}
            </div>
            </div>
        </div>
    )
};

export default Footer;