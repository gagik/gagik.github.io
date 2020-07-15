import React from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import Layout from '../components/layout';
import Intro from '../sections/intro';
import Projects from '../sections/projects';

const LandingPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logotext: file(relativePath: { eq: "logo/text.png" }) {
      		childImageSharp {
            fixed(width: 110) {
              ...GatsbyImageSharpFixed_tracedSVG
            }
          }
      }
  }
  `);
  return (
    <Layout>
        <Intro />
        <Projects />
        {/* <h1>{data.site.siteMetadata.title}</h1>
        <Link to='/blog'>This is blog!!</Link> */}
    </Layout>
  );
};

export default LandingPage;