import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const richText_render = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => <img alt="" class="img-fluid" src={node.data.target.fields.file['en-US'].url} />
  },
}

export const pageQuery = graphql`
    query BlogPostBySlug ($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        contentfulProject (slug: {eq: $slug}) {
            name
            thumbnail {
                fluid {
                    src
                }
            }
            content {
                json
            }
        }
    } 
`

class BlogPage extends React.Component {
    render() {
        const post = this.props.data.contentfulProject;
        return (
            <Layout>
            <div>
                <h1>{post.name}</h1>
                <p>{documentToReactComponents(post.content.json, richText_render)}</p>
            </div>
            </Layout>
        );
    }
};

export default BlogPage;