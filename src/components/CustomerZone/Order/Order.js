import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    return (
        <div className="row">

            <div className="col-md-2 container-fluid justify-content-left" >
                <Sidebar />
            </div>

            <div className="col-md-8 container-fluid" style={{ margin: '30px 0px 0px 40px' }}>
                <div>
                    <h2>Order</h2>
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

                        <div class="form-group">

                            <input type="name" class="form-control" placeholder=" " />

                        </div>

                        <div class="form-group">

                            <input type="number" class="form-control" placeholder="Price" />
                        </div>


                        <button type="submit" class="btn btn-primary">Send us</button>
                    </form>
                </div>
            </div>



        </div>
    );
};

export default Order;