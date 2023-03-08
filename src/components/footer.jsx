import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import * as style from '../styles/modules/footer.module.scss';
import iconBlack from '../assets/logo/icon_black.svg';
import iconWhite from '../assets/logo/icon_white.svg';

function Footer(props) {
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

  const icon = props.flipped ? iconBlack : iconWhite;

  const links = data.links.map((link, i) => (
    // TODO: Avoid this.
    // eslint-disable-next-line react/no-array-index-key
    <a key={i} href={link[1]}>
      {link[0]}
    </a>
  ));
  const flipped = props.flipped ? ` ${style.flipped}` : '';
  return (
    <div className={style.footer + flipped}>
      <AnchorLink href="#start">
        <div className={style.logo}>
          <img alt="Logo Icon" height="65px" src={icon} />
        </div>
      </AnchorLink>
      <div className="container">
        <div className={style.left}>
          ©
          {' '}
          {new Date().getFullYear()}
          {' '}
          Designed and Developed by Gagik Amaryan
        </div>
        <div className={style.right}>{links}</div>
      </div>
    </div>
  );
}

export default Footer;
