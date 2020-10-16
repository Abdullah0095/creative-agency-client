import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const SidebarAdmin = () => {
    return (
        <div>
            <div style={{ margin: '30px 0px 0px 40px' }}>
                <Link to="/home">
                    <img style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                </Link>
            </div>

            <div style={{ marginTop: '60px', marginLeft: '70px' }}>
                <Link to="/admin/serviceList" style={{ textDecoration: 'none', color: 'black' }}>
                    <h5>Service List</h5><br />
                </Link>

                <Link to="/admin/addService" style={{ textDecoration: 'none', color: 'black' }}>
                    <h5>Add Service</h5><br />
                </Link>

                <Link to="/admin/makeAdmin" style={{ textDecoration: 'none', color: 'black' }}>
                    <h5>Make Admin</h5>
                </Link>
            </div>
        </div>
    );
};

export default SidebarAdmin;