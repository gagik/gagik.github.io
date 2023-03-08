import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import Section from '../components/section';
import * as style from '../styles/modules/projects.module.scss';
import ProjectCard from '../components/projectCard';

function Intro() {
  const data = useStaticQuery(graphql`
    query {
      pageInfo: allContentfulIntro {
        nodes {
          projectIntro
        }
      }
      projects: allContentfulProject(
        filter: { featured: { eq: true } }
        sort: { order: ASC }
      ) {
        nodes {
          longName
          big
          slug
          description {
            description
          }
          banner {
            duotone: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 284
                  height: 404
                  layout: FIXED
                  placeholder: BLURRED
                  transformOptions: {
                    duotone: { highlight: "#D9C299", shadow: "#1A1D1C" }
                  }
                )
              }
            }
            image: localFile {
              childImageSharp {
                gatsbyImageData(
                  width: 280
                  height: 400
                  layout: FIXED
                  placeholder: BLURRED
                )
              }
            }
          }
        }
      }
    }
  `);
  const pageInfo = data.pageInfo.nodes[0];
  const projects = data.projects.nodes.map((node) => (
    <ProjectCard
      title={node.longName}
      letter={node.letter}
      description={node.description.description}
      duotone={getImage(node.banner.duotone)}
      image={getImage(node.banner.image)}
      slug={node.slug}
      big={node.big}
      key={node.slug}
    />
  ));
  return (
    <Section className={`${style.section} flipped`}>
      <div id="projects" className="container">
        <div className={`${style.sHeading} section-heading`}>
          <h4>projects</h4>
        </div>
        <div className={`${style.content} section-content`}>
          <h4>{pageInfo.projectIntro}</h4>
          <div className={style.projects}>{projects}</div>
        </div>
      </div>
    </Section>
  );
}

export default Intro;
