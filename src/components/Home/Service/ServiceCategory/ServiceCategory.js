import React from 'react';
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


const ServiceCategory = () => {
    console.log(serviceItems)
    return (
    <div>
        {serviceItems.map(item => <ServiceDisplay item={item}></ServiceDisplay>)}
        
        

    </div>
);
    };

export default ServiceCategory;