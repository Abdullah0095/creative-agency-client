import React from 'react';
import { Link,  } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';


const Sidebar = () => {
    
    return (
        <section >

            <div style={{margin: '50px 0px 0px 40px'}}>
                <Link to="/home">
                    <img style={{ width: '150px', height: '47px' }} src={logo} alt="" />
                </Link>
            </div>

            <div style={{marginTop: '60px', marginLeft: '70px'}}>
                <Link to="/"style={{textDecoration:'none', color: 'black'}}>
                    <h5>Order</h5><br/>
                </Link>

                <Link to="/customer/serviceList" style={{textDecoration:'none', color: 'black'}}>
                    <h5>Service List</h5><br/>
                </Link>

                <Link to="/customer/review" style={{textDecoration:'none', color: 'black'}}>
                    <h5>Review</h5>
                </Link>
            </div>
            {/* <div>style={{width: '1400px', height: '900px'}}</div> */}
        </section>
    );
};

export default Sidebar;