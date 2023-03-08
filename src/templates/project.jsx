import React from 'react';
import { Link } from 'gatsby';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import * as style from '../styles/modules/projectPage.module.scss';
import SEO from '../components/SEO';
import Layout from '../components/layout';

function Bold({ children }) {
  return <span className="bold">{children}</span>;
}
function Text({ children }) {
  return <p className="align-center">{children}</p>;
}

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (code) => {
      const codeType = code[0];
      switch (codeType) {
        case 'v':
          // eslint-disable-next-line no-case-declarations
          const embedId = code.substring(3);
          return (
            <iframe
              title="Project Video"
              src={`https://player.vimeo.com/video/${embedId}`}
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowfullscreen
            />
          );
        default:
          return <Text>{code}</Text>;
      }
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData } = node.data.target;
      if (!gatsbyImageData) {
        return null;
      }
      return <GatsbyImage image={gatsbyImageData} />;
    },
  },
};

// See gatsby-node.js for the query that generates this page.

function ProjectPage({ pageContext }) {
  const { post } = pageContext;
  const thumbnail = getImage(post.thumbnail.localFile);
  return (
    <Layout>
      <div className={style.post}>
        <div className={`container ${style.container}`}>
          <h1>{post.name}</h1>
          <div className={style.description}>
            {post.description.description}
          </div>
          <GatsbyImage
            alt="Thumbnail"
            className={style.thumbnail}
            image={thumbnail}
          />
          <div className={style.content}>
            {renderRichText(post.content, richTextOptions)}
          </div>
          <div className={style.buttons}>
            {post.demoUrl && (
              <a href={post.demoUrl}>
                <div className={`${style.more} btn ${style.demo}`}>
                  {post.demoText}
                </div>
              </a>
            )}
            <Link to="/#projects">
              <div className={`${style.more} btn`}>See more projects</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function Head({ pageContext, location }) {
  const { post } = pageContext;
  const thumbnailSrc = getSrc(post.thumbnail.localFile);
  return (
    <SEO
      title={post.name}
      description={post.description.description}
      image={thumbnailSrc}
      location={location}
    />
  );
}

export default ProjectPage;
