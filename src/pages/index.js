import React from 'react';
import Layout from '../components/layout';
import Projects from '../sections/projects';
import Resume from '../sections/resume';
import Contact from '../sections/contact';
import Intro from '../sections/intro';

const LandingPage = () => {
  return (
    <Layout flipped={true}>
        <div className="disclaimer">
            <span><b>Note:</b> I just revamped my website and it is still being "tested" by users like you. I am eager to hear feedback!</span>
        </div>
        <Intro />
        <Projects />
        <Resume />
        <Contact />
    </Layout>
  );
};

export default LandingPage;