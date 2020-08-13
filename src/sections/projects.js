import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/projects.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import ProjectCard from '../components/projectCard';
import ScrollableTriangle from '../components/scrollableTriangle';


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
                    slug
                    description {
                        description
                    }
                    banner {
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
    const projects = data.projects.nodes.map((node, i) => <ProjectCard 
        title={node.longName}
        letter={node.letter}
        description={node.description.description}
        duotone={node.banner.localFile.childImageSharp.duotone}
        image={node.banner.localFile.childImageSharp.image}
        slug={node.slug}
        big={node.big}
        key={i}
    />);
    return (
        <Section className={style.section + " flipped"}>
            <div id="projects" className="container">
                <div className={style.sHeading + " section-heading"}>
                    <h4>projects</h4>
                    {/* <ScrollableTriangle amount={data.projects.nodes.length} className={style.triangle} /> */}
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