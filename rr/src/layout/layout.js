import React from 'react';

import './layout.css';

const Layout = (props) => {
    return (
        <>
            <header className="layout">
                <a className="goHome" href="/">
                    Home
                </a>
                <button className="logoutBtn">Log Out</button>
            </header>
            {props.children}
            <footer></footer>
        </>
    );
};

export default Layout;
