const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const projectPost = path.resolve('./src/templates/project.js');
    return graphql(
        `
        {
          allContentfulProject {
            edges {
              node {
                name
                slug
                description {
                    description
                }
                demoUrl
                demoText
                thumbnail { 
                    localFile {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
                content {
                    raw
                    references {
                        ... on ContentfulAsset {
                          contentful_id
                          __typename
                          gatsbyImageData
                        }
                    }
                }
              }
            }
          }
        }
        `
    ).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        const posts = result.data.allContentfulProject.edges;

        posts.forEach((post, index) => {
            createPage({
                path: post.node.slug,
                component: projectPost,
                context: {
                    slug: post.node.slug,
                    post: post.node,
                }
            })
        });
    })
};