import React from 'react';
import Layout from '../components/layout';
import Projects from '../sections/projects';
import Resume from '../sections/resume';
import Contact from '../sections/contact';
import Intro from '../sections/intro';
import SEO from '../components/SEO';
import Section from '../components/section';

const LandingPage = () => {
  return (
    <Layout>
        <Section>
            <div style={{paddingLeft: 20, paddingRight: 20}}>Hmm, page not found. Maybe you can find what you were looking for through the&nbsp;<u><a href="/">home page</a></u>?</div>
        </Section>
    </Layout>
  );
};

export function Head() {
  return <SEO 
    title="Page not found"
    />
}

export default LandingPage;