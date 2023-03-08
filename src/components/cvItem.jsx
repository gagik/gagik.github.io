import React from 'react';

function CvItem(props) {
  const { style } = props;
  return (
    <div className={style.cvItem}>
      <h1 className={style.heading}>{props.title}</h1>
      <div className={style.description}>{props.description}</div>
      <div className={style.date}>{props.date}</div>
    </div>
  );
}

export default CvItem;
