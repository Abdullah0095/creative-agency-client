import React from 'react';
import Head from './Head/Head';
import Navbar from './Navbar/Navbar';

const Header = () => {
    const headerStyle = {
        width: '1368px',
        height: '641px',
        backgroundColor: '#FBD062',
        
    }
    return (
        <div style={headerStyle}>
            <Navbar/>
            <Head/>
        </div>
    );
};

export default Header;