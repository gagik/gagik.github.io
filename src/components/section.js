import React from 'react';
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className={props.className + ' section'}>
            {props.children}
        </div>
    );
}

export default Layout;