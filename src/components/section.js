import React from 'react';

const Section = (props) => {
    return (
        <div className={props.className + ' section'}>
            {props.children}
        </div>
    );
}

export default Section;