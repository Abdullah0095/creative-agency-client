import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logos/logo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg ">
            <a class="navbar-brand" href="#"> <img src={logo} alt="" /> </a>
            

            <div class="collapse navbar-collapse navbar-items">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link text-black mr-4" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black mr-4" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black mr-4" href="#">Our Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-black mr-4" href="#">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <Link style={{textDecoration: 'none'}} to="/admin/serviceList"><button id="login-button" class="nav-link mr-5">Admin</button></Link>
                    </li>
                    <li class="nav-item">
                        <Link style={{textDecoration: 'none'}} to="/customer/order/1"><button id="login-button" class="nav-link mr-5">Login</button></Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;