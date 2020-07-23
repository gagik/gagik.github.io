import React from 'react';
import Footer from '../components/footer';
import '../styles/index.scss'
import Header from './header';

const Layout = (props) => {
    return (
        <div className="layout">
            <div className="disclaimer">
                <span><b>Note:</b> I just revamped my website and it is still being "tested" by users like you. I am eager to hear feedback!</span>
            </div>
            <Header />
            {props.children}
            <Footer flipped={props.flipped} />
        </div>
    );
}

export default Layout;