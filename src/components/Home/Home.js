import React from 'react';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Service from './Service/Service';
import Work from './Work/Work';


const Home = () => {
    return (
        <div>
            <Header/>
            <Service/>
            <Work/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;