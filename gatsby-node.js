const path = require('path');

exports.createPages = ({graphql, actions}) => {
    const {createPage} = actions;

    const blogPost = path.resolve('./src/templates/blog.js');
    return graphql(
        `
        {
          allContentfulPost {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
        `
    ).then(result => {
        if(result.errors) {
            throw result.errors;
        }

        const posts = result.data.allContentfulPost.edges;

        posts.forEach((post, index) => {
            createPage({
                path: post.node.slug,
                component: blogPost,
                context: {
                    slug: post.node.slug
                }
            })
        });
    })
};