import React from 'react';
import './Service.css';
import slack from '../../../images/logos/slack.png';
import google from '../../../images/logos/google.png';
import uber from '../../../images/logos/uber.png';
import netflix from '../../../images/logos/netflix.png';
import airbnb from '../../../images/logos/airbnb.png';
import ServiceDisplay from '../ServiceDisplay/ServiceDisplay';

const serviceItems = [
    {
        name: "Web & Mobile design",
        description: "We craft stunning and amazing web UI, using a well drafted UX to fit your product",
        image: "https://i.ibb.co/TDfnV5m/service1.png"
    },
    {
        name: "Graphic design",
        description: "Amazing flyers, social media posts and brand representations that would make your brand stand out",
        image: "https://i.ibb.co/QJzmj9Q/service2.png"
    },
    {
        name: "Web development",
        description: "with well written codes, we build amazing apps for all platforms. mobile and web apps in general",
        image: "https://i.ibb.co/jGgx5ZR/service3.png"
    },
]




const Service = () => {
    return (
        <section style={{width: '1440px', height: '920px'}}>
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