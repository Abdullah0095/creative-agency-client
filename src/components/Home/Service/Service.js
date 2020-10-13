import React from 'react';
import './Service.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import ServiceDisplay from './ServiceDisplay/ServiceDisplay';



const Service = () => {
    return (
        <section style={{width: '1370px', height: '840px'}}>
            <div className="company d-flex justify-content-center mb-5">
                <div  className="company-logo image-fluid  p-3"><img src={slack} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={google} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={uber} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={netflix} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={airbnb} alt=""/></div>
            </div>
            
            <div>
                <ServiceDisplay/>
            </div>
        </section>
    );
};

export default Service;