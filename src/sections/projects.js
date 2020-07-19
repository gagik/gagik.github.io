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
                    big
                    description {
                        description
                    }
                    thumbnail {
                        localFile {
                            childImageSharp {
                                duotone: fixed(
                                    width: 284, height: 404,
                                    duotone: { highlight: "#D9C299", shadow: "#1A1D1C"}
                                ) {
                                ...GatsbyImageSharpFixed
                                }
                                image: fixed(
                                    width: 280, height: 400
                                ) {
                                ...GatsbyImageSharpFixed
                                }
                        }
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
        duotone={node.thumbnail.localFile.childImageSharp.duotone}
        image={node.thumbnail.localFile.childImageSharp.image}
        big={node.big}
    />);
    return (
        <Section className={style.section + " flipped"}>
            <div className="container">
                <div className="section-heading">
                    <h4>projects</h4>
                </div>
                <div className={style.content + " section-content"}>
                    <h4>{pageInfo.projectIntro}</h4>
                    <div className={style.projects}>
                    {projects}
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Intro;