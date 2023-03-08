import React from 'react';
import Layout from '../components/layout';
import Projects from '../sections/projects';
import Resume from '../sections/resume';
import Contact from '../sections/contact';
import Intro from '../sections/intro';
import SEO from '../components/SEO';

function LandingPage() {
  return (
    <Layout flipped>
      <Intro />
      <Projects />
      <Resume />
      <Contact />
    </Layout>
  );
}

export function Head() {
  return <SEO title="Home" />;
}

export default LandingPage;
