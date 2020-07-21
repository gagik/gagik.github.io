import React from 'react';
import Footer from '../components/footer';
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="layout">
            {props.children}
            <Footer flipped={props.flipped} />
        </div>
    );
}

export default Layout;