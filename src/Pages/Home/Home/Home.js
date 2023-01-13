import React from 'react';
import ContactForm from '../../ContactForm/ContactForm';
import Goal from '../../Goal/Goal';
import NeedMoreHelp from '../../NeedMoreHelp/NeedMoreHelp';
import Slider from '../../Slider/Slider';
import TextForYou from '../../TextForYou/TextForYou';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <TextForYou></TextForYou>
            <Goal></Goal>
            <NeedMoreHelp></NeedMoreHelp>
            {/* <ContactForm></ContactForm> */}
        </div>
    );
};

export default Home;