import React from 'react';
import Section from '../components/section';
import style from '../styles/modules/intro.module.scss';
import { useStaticQuery, graphql } from 'gatsby';
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import IntroShapes from '../components/introShapes';
import RadioOGG from "../assets/videos/radio.webm";

const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>

const richText_render = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.EMBEDDED_ASSET]: (node) => <img alt="Project" className="img-fluid" src={node.data.target.fields.file['en-US'].url} />
    },
    // TODO: Consider replacing with a less "hacky" 
    // solution if later Contentful builds allow.
    renderText: text => text.split('\n').flatMap((text, i) => [i > 0 && <br key={i} />, text])
}

const Intro = () => {
    let data = useStaticQuery(graphql`
        query {
            allContentfulIntro {
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
    }
    `).allContentfulIntro.nodes[0];
    return (
        <Section className={style.section}>
            <IntroShapes className={style.shapes} />
            <div className={"container " + style.container}>
                <div className={style.radio}>
                    <video class={style.video} width="900px" autoplay="autoplay" muted>
                        {/* TODO: either alternative video format or placeholder     */}
                        <source src={RadioOGG} type="video/webm" />
                    </video>
                </div>
                <div className={style.content + " section-content"}>
                    <h1 className={style.greeting}>Hello</h1>
                    <div className={style.introText}>
                    {documentToReactComponents(data.introText.json, richText_render)}
                    </div>
                </div>
            </div>
        </Section>
    );
};


export default Intro;