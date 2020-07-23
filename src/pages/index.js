import React from 'react';
import Layout from '../components/layout';
import Projects from '../sections/projects';
import Resume from '../sections/resume';
import Contact from '../sections/contact';
import Intro from '../sections/intro';
import SEO from '../components/SEO';

const LandingPage = () => {
  return (
    <Layout flipped={true}>
        <SEO 
          title="Home"
        />
        <Intro />
        <Projects />
        <Resume />
        <Contact />
    </Layout>
  );
};

export default LandingPage;