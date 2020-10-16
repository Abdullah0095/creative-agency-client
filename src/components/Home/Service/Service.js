import React from 'react';
import './Service.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';
import serviceItems from './ServiceData/ServiceData';






const Service = () => {
    return (
        <section style={{width: '1440px', height: '800px'}}>
            <div className="company d-flex justify-content-center mb-5">
                <div  className="company-logo image-fluid  p-3"><img src={slack} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={google} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={uber} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={netflix} alt=""/></div>
                <div className="company-logo image-fluid p-3"><img src={airbnb} alt=""/></div>
            </div>
            <div className="d-flex justify-content-center mb-5" >
                <h1>Provide awesome <span style={{color: 'green'}}>services</span> </h1>
            </div>
            <div>
                {
                    serviceItems.map(item => <ServiceDisplay item={item}></ServiceDisplay>)
                }
            </div>
        </section>
    );
};

export default Service;