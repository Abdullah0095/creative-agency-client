import React from 'react';
import './ServiceDisplay.css';

const ServiceDisplay = ({ item }) => {
    return (
        <div className="our-service ">

            <button className="service-button">
                <div >

                    <img class="card-img-top" src={item.image} />

                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description}</p>
                    </div>

                </div>
            </button>
        </div>
    );
};

export default ServiceDisplay;