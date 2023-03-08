import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import * as style from '../styles/modules/projectPage.module.scss';
import SEO from '../components/SEO';
import { GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.CODE]: code => {
        let codeType = code[0];
        switch(codeType) {
            case "v":
                let embedId = code.substring(3);
                return (<iframe title="Project Video" src={"https://player.vimeo.com/video/" + embedId} width="640" height="360" 
                frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>);
            default:
                return <Text>{code}</Text>
        }
    }
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { gatsbyImageData } = node.data.target
        if (!gatsbyImageData) {
          return null
        }
        return <GatsbyImage image={gatsbyImageData} />  
    }
  },
}

// See gatsby-node.js for the query that generates this page.

const ProjectPage = ({ pageContext }) => {
        const { post } = pageContext;
        const thumbnail = getImage(post.thumbnail.localFile);
        console.log("thumbnail", thumbnail)
        return (
            <Layout>
                <div className={style.post}>
                    <div className={"container " + style.container}>
                        <h1>{post.name}</h1>
                        <div className={style.description}>{post.description.description}</div>
                        <GatsbyImage alt="Thumbnail" className={style.thumbnail} image={thumbnail} /> 
                        <div className={style.content}>
                            {renderRichText(post.content, richTextOptions)}
                        </div>
                        <div className={style.buttons}>
                            {
                                post.demoUrl && <a href={post.demoUrl}>
                                    <div className={style.more + " btn " + style.demo}>
                                        {post.demoText}
                                    </div>
                                </a>
                            }
                            <Link to="/#projects">
                                <div className={style.more + " btn"}>
                                    See more projects
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    };

export function Head({pageContext}) {
    const { post } = pageContext;
    console.log(post)
    const thumbnailSrc = getSrc(post.thumbnail);
    return <SEO
        title={post.name}
        description={post.description.description}
        image={thumbnailSrc}
    />
  }

export default ProjectPage;
