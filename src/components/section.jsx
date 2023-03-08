import React from 'react';

function Section(props) {
  return <div className={`${props.className} section`}>{props.children}</div>;
}

export default Section;
