import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import * as style from '../styles/modules/contact.module.scss';
import Section from '../components/section';

function Bold({ children }) {
  return <span className="bold">{children}</span>;
}

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (_) => (
      <span>
        me
        <span className="none">nope</span>
        @
        <span className="none">away</span>
        gagik.co
      </span>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>,
  },
  // TODO: Consider replacing with a less "hacky"
  // solution if later Contentful builds allow.
  renderText: (text) => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text]),
};

function Contact() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIntro {
        nodes {
          contactText {
            raw
          }
        }
      }
    }
  `).allContentfulIntro.nodes[0];
  return (
    <Section className={`${style.section} flipped`}>
      <div className={`${style.container} container`}>
        <div className="section-heading">
          <h4>contact</h4>
        </div>
        <div className="section-content">
          <div className={style.cubes}>
            <div className={`${style.cube} ${style.cubeBack}`} />
            <div className={`${style.cube} ${style.cubeText}`}>
              {renderRichText(data.contactText, richTextOptions)}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
