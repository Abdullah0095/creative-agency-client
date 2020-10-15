import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Servicelist = () => {
    return (
        <div className="row">
            <div className="col-md-2 container-fluid">
                <Sidebar />
            </div>
            <div className="col-md-8 container-fluid" style={{ margin: '30px 0px 0px 00px', backgroundColor: 'aliceblue' }}>
                <div>
                    <h1>Order</h1>
                </div>
                <div>
                    <h1>customer order list gulo dakhabe database theke</h1>
                </div>
            </div>
        </div>
    );
};

export default Servicelist;