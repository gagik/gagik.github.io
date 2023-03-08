import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as style from '../styles/modules/projectCard.module.scss';

function ProjectCard(props) {
  return (
    <div className={style.project}>
      <div className={style.thumbnail}>
        <div className={style.duotone}>
          <Link to={`/${props.slug}`}>
            <GatsbyImage
              image={props.duotone}
              transformOptions={{ grayscale: true }}
            />
          </Link>
        </div>
        <div className={style.image}>
          <Link to={`/${props.slug}`}>
            <GatsbyImage image={props.image} />
          </Link>
        </div>
      </div>
      <div className={style.content}>
        <div>
          <h1>{props.title}</h1>
          <span>{props.description}</span>
          <div className={style.actionWrapper}>
            <Link to={`/${props.slug}`}>
              <div className={style.action}>Learn More</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
