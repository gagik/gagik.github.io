import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Section from '../components/section';
import * as style from '../styles/modules/intro.module.scss';
import IntroShapes from '../components/introShapes';
import RadioOGG from '../assets/videos/radio.webm';

function Bold({ children }) {
  return <span className="bold">{children}</span>;
}
// const Text = ({ children }) => <p className="align-center">{children}</p>

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img
        alt="Project"
        className="img-fluid"
        // eslint-disable-next-line react/destructuring-assignment
        src={node.data.target.fields.file['en-US'].url}
      />
    ),
  },
  // TODO: Consider replacing with a less "hacky"
  // solution if later Contentful builds allow.
  renderText: (text) => text.split('\n').flatMap((renderedText, i) => [i > 0 && <br key={i} />, renderedText]),
};

function Intro() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulIntro {
        nodes {
          contactText {
            raw
          }
          introText {
            raw
          }
          projectIntro
        }
      }
    }
  `).allContentfulIntro.nodes[0];
  return (
    <Section className={style.section}>
      <IntroShapes className={style.shapes} />
      <div className={`container ${style.container}`}>
        <div className={style.radio}>
          <video className={style.video} width="900px" autoPlay="autoplay" muted>
            {/* TODO: either alternative video format or placeholder     */}
            <source src={RadioOGG} type="video/webm" />
          </video>
        </div>
        <div className={`${style.content} section-content`}>
          <h1 className={style.greeting}>Hello</h1>
          <div className={style.introText}>
            {renderRichText(data.introText, richTextOptions)}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
