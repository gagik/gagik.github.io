import React from 'react';
import Layout from '../components/layout';
import { graphql, Link } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import style from '../styles/modules/projectPage.module.scss';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const richText_render = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
        console.log(node);
        return <img alt="" class="img-fluid" src={node.data.target.fields.file['en-US'].url} />
    }
  },
}

export const pageQuery = graphql`
    query ProjectPostBySlug ($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulProject (slug: {eq: $slug}) {
            name
            description {
                description
            }
            thumbnail { 
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
            content {
                json
            }
        }
    } 
`

class ProjectPage extends React.Component {
    render() {
        const post = this.props.data.contentfulProject;
        const thumbnail = post.thumbnail.localFile.childImageSharp.fluid;
        return (
            <Layout>
                <SEO
                    title={post.name}
                    description={post.description.description}
                    image={thumbnail.src}
                />
                <div className={style.post}>
                    <div className={"container " + style.container}>
                        <h1>{post.name}</h1>
                        <div className={style.description}>{post.description.description}</div>
                        <Img alt="Thumbnail" className={style.thumbnail} fluid={thumbnail} /> 
                        <div className={style.content}>
                            {documentToReactComponents(post.content?.json, richText_render)}
                        </div>
                        <Link to="/#projects">
                            <span className="btn">
                                See more projects
                            </span>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }
};

export default ProjectPage;