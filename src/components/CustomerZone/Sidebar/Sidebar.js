import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Sidebar = () => {
    return (
        <section style={{width: '1440px', height: '900px'}}>

            <div style={{margin: '30px 0px 0px 40px'}}>
                <Link to="/home">
                    <img style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                </Link>
            </div>

            <div style={{marginTop: '60px', marginLeft: '70px'}}>
                <Link style={{textDecoration:'none'}}>
                    <h5>Order</h5><br/>
                </Link>

                <Link style={{textDecoration:'none'}}>
                    <h5>Service List</h5><br/>
                </Link>

                <Link style={{textDecoration:'none'}}>
                    <h5>Review</h5>
                </Link>
            </div>
        </section>
    );
};

export default Sidebar;