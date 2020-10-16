import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDisplay.css';

const ServiceDisplay = ({ item }) => {

    

    return (
        <div className="our-service ">

        <Link to={`/customer/order/${item.id}`}>

        <button  className="service-button">
                <div >

                    <img class="card-img-top" src={item.image} />

                    <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <p class="card-text">{item.description}</p>
                        
                    </div>

                </div>
            </button>

        </Link>
        </div>
    );
};

export default ServiceDisplay;