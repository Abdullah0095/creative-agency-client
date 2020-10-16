import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    return (
        <div style={{height: '600px', width: '1380px'}} className="row">

            <div className="col-md-2 container-fluid " >
                <Sidebar />
            </div>

            <div className="col-md-10 container-fluid" style={{  backgroundColor: 'aliceblue' }}>
                <div style={{marginLeft: '100px', width: '600px'}}>

                <div>
                    <h1 style={{ margin: '40px 0px 0px 0px' }}>Order</h1>
                </div>



                <div style={{ marginTop: '40px' }}>
                    <form>
                        <div class="form-group">

                            <input type="name" class="form-control" placeholder="Your name/ Company's name" />

                        </div>

                        <div class="form-group">

                            <input type="email" class="form-control" placeholder="Your email" />

                        </div>

                        <div class="form-group">

                            <input type="name" class="form-control" placeholder=" " />

                        </div>

                        <div className="form-group">
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="description" rows="3"></textarea>
                        </div>

                        <div class="form-group">

                            <input type="number" class="form-control" placeholder="Price" />
                        </div>


                        <button style={{width: '130px', height: '40px', backgroundColor: 'rgba(17, 20, 48, 1)'}} type="submit" class="btn btn-primary"> Send </button>
                    </form>
                </div>
                </div>
            </div>



        </div>
    );
};

export default Order;