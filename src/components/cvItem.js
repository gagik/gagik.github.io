import React from 'react';

const CvItem = (props) => {
    const style = props.style;
    return (
        <div className={style.cvItem}>
            <h1 className={style.heading}>{props.title}</h1>
            <div className={style.description}>{props.description}</div>
            <div className={style.date}>{props.date}</div>
        </div>
    )
};

export default CvItem;