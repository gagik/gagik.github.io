import React from 'react';
import Img from 'gatsby-image';
import style from '../styles/modules/projectCard.module.scss';

const ProjectCard = (props) => {
    const bigger = props.big ? " " + style.big : "";
    return (
        <div className={style.project + " " + bigger}>
                <div className={style.thumbnail}>
                    <div className={style.duotone}>
                         <Img fixed={props.duotone}/>
                    </div>
                <div className={style.image}>
                        <Img fixed={props.image}/>
                </div>
                </div>
                <div className={style.content}>
                    <div>
                        <h1>{props.title}</h1>
                        <span>{props.description}</span>
                        <div className={style.actionWrapper}>
                            <div className={style.action}>Learn More</div>
                        </div>
                    </div>
                </div>
        </div>  
    );
};

export default ProjectCard;