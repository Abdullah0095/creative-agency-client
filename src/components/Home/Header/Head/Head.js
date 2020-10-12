import React from 'react';
import './Head.css';
import frame from '../../../../images/logos/Frame.png';

const Head = () => {
    return (
        <div>
            <div className="row mt-2">
                <div className="col-md-4 d-flex align-items-end">
                    <div>
                    <h1>Let's Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Minima, voluptates ipsum eius <br/> laborum distinctio nostrum.</p>
                    <button id="hire-button">Hire Us</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={frame} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Head;