import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Section from '../components/section';

function LandingPage() {
  return (
    <Layout>
      <Section>
        <div style={{ paddingLeft: 20, paddingRight: 20 }}>
          Hmm, page not found. Maybe you can find what you were looking for
          through the&nbsp;
          <u>
            <a href="/">home page</a>
          </u>
          ?
        </div>
      </Section>
    </Layout>
  );
}

export function Head({ location }) {
  return <SEO title="Page not found" location={location} />;
}

export default LandingPage;
