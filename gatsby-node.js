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
                    slug: post.node.slug
                }
            })
        });
    })
};