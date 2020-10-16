import React from 'react';
import SidebarAdmin from '../SidebarAdmin/SidebarAdmin';

const AddServiceAdmin = () => {
    return (
        <div style={{ height: '600px' }} className="row">
            <div className="col-md-2 container-fluid">
                <SidebarAdmin />
            </div>
            <div className="col-md-10 container-fluid" style={{ backgroundColor: 'aliceblue' }}>
                <div>
                    <h3 style={{ margin: '30px 0px 30px 100px' }}>Add Services</h3>
                </div>
                <div style={{marginLeft: '100px', width: '600px'}}>
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Service title</label>
                            <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServiceAdmin;