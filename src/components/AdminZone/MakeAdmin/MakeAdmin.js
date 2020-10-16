import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const MakeAdmin = () => {
    return (
        <div style={{ height: '600px' }} className="row">
            <div className="col-md-2 container-fluid">
                <SidebarAdmin />
            </div>
            <div className="col-md-10 container-fluid" style={{ backgroundColor: 'aliceblue' }}>
                <div>
                    <h3 style={{ margin: '30px 0px 60px 100px' }}>Add Services</h3>
                </div>
                <div style={{marginLeft: '100px', width: '600px'}}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <div style={{display: 'flex'}}>
                            <div style={{width: '300px'}}><input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="admin email" /></div>
                            <div><button type="button" class="btn btn-success">Submit</button></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;