import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    return (
        <div style={{ height: '600px', width: '1380px' }} className="row">
            <div className="col-md-2 container-fluid " >
                <Sidebar />
            </div>
            <div className="col-md-10 container-fluid " style={{ backgroundColor: 'aliceblue' }}>
                <div style={{marginLeft: '100px', width: '600px'}}>
                    <div>
                        <h1 style={{ margin: '30px 0px 0px 00px' }}>Order</h1>
                    </div>
                    <div style={{ marginTop: '70px' }}>
                        <form>
                            <div class="form-group">
                                <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your name" />
                            </div>
                            <div class="form-group">
                                <input type="name" class="form-control" id="exampleInputPassword1" placeholder="company's name designation" />
                            </div>

                            <div className="form-group">
                                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="description" rows="3"></textarea>
                            </div>
                            <button style={{ width: '130px', height: '40px', backgroundColor: 'rgba(17, 20, 48, 1)' }} type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Review;