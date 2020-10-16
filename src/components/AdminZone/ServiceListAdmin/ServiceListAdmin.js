import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const ServiceListAdmin = () => {
    return (
        <div style={{height: '600px'}} className="row">
            <div className="col-md-2 container-fluid">
                    <SidebarAdmin/>
            </div>
            <div className="col-md-10 container-fluid" style={{backgroundColor: 'aliceblue'}}>
            <div>
                    <h3 style={{ margin: '30px 0px 0px 00px' }}>Services List</h3>
                </div>
            </div>
        </div>
    );
};

export default ServiceListAdmin;