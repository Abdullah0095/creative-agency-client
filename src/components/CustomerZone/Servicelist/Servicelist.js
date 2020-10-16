import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Servicelist = () => {
    return (
        <div style={{height: '600px' , width: '1380px'}} className="row">
            <div className="col-md-2 container-fluid">
                <Sidebar />
            </div>
            <div className="col-md-10 container-fluid" style={{ backgroundColor: 'aliceblue' }}>
                <div>
                    <h1 style={{ margin: '30px 0px 0px 00px' }}>Order</h1>
                </div>
                <div>
                    <h1>customer order list gulo dakhabe database theke</h1>
                </div>
            </div>
        </div>
    );
};

export default Servicelist;