import React from 'react';

const CvItem = (props) => {
    const style = props.style;
    return (
        <div class={style.cvItem}>
            <h1 class={style.heading}>{props.title}</h1>
            <span class={style.description}>{props.description}</span>
            <div class={style.date}>{props.date}</div>
        </div>
    )
};

export default CvItem;