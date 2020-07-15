import React from 'react';
import Img from 'gatsby-image';
import style from '../styles/modules/projectCard.module.scss';

const ProjectCard = (props) => {
    return (
        <div className={style.cardsContainer}>
            <div className={style.infoCard}>
                <div className={style.content}>
                    <div>
                        <h1>{props.title}</h1>
                        <span>{props.description}</span>
                    </div>
                </div>
            </div>
            <div className={style.imageCard}>
                <Img fixed={props.image}/>
                <div className={style.shadow}></div>
            </div>
            <div className={style.letter}>
                {props.letter}
            </div>
        </div>  
    );
};

export default ProjectCard;