import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/contact.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => <span className="bold">{children}</span>

const richText_render = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
      [MARKS.CODE]: _ => <span>me<span className="none">nope</span>@<span className="none">away</span>gagik.co</span>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_, children) => <p>{children}</p>
    },
    // TODO: Consider replacing with a less "hacky" 
    // solution if later Contentful builds allow.
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Contact = () => {
    let data = useStaticQuery(graphql`
        query {
            allContentfulIntro {
            nodes {
                contactText {
                    json
                }
            }
        }
    }
    `).allContentfulIntro.nodes[0];
    return (
        <Section className={style.section + " flipped"}>
            <div className={style.container + " container"}>
                <div className="section-heading">
                    <h4>contact</h4>
                </div>
                <div className="section-content">
                    <div className={style.cubes}>
                        <div className={style.cube + " " + style.cubeBack}></div>
                        <div className={style.cube + " " + style.cubeText}>
                        {documentToReactComponents(data.contactText.json, richText_render)}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Contact;