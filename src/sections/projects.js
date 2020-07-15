import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/projects.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ProjectCard from '../components/projectCard';

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const richText_render = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => <img class="img-fluid" src={node.data.target.fields.file['en-US'].url} />
    },
    // TODO: Consider replacing with a less "hacky" 
    // solution if later Contentful builds allow.
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br />, text])
}

const Intro = () => {
    let data = useStaticQuery(graphql`
        query {
            pageInfo: allContentfulIntro {
            nodes {
                contactText {
                    json
                }
                introText {
                    json
                }
                projectIntro
            }
        }
            projects: allContentfulProject(
                filter:{featured:{eq:true}}
                sort:{fields:[order], order:ASC})
                  {
                   nodes {
                    longName
                    letter
                    description {
                        description
                    }
                    thumbnail {
                        fixed(
                            width: 800, height: 540
                        ) {
                        ...GatsbyContentfulFixed
                        }
                  }
                } 
              }
    }
    `);
    const pageInfo = data.pageInfo.nodes[0];
    const projects = data.projects.nodes.map((node) => <ProjectCard 
        title={node.longName}
        letter={node.letter}
        description={node.description.description}
        image={node.thumbnail.fixed}
    />);
    return (
        <Section className={style.section + " flipped"}>
            <div className="container">
                <div className="section-heading">
                    <h4>projects</h4>
                </div>
                <div className={style.content + " section-content"}>
                    <h4>{pageInfo.projectIntro}</h4>
                    {projects}
                </div>
            </div>
        </Section>
    );
};


export default Intro;