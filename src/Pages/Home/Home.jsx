import React from 'react';
import HeroSection from '../../component/HeroSection/HeroSection';
import Friends from '../Friends/Friends';
import { useLoaderData } from 'react-router-dom';



const Home = () => {
    const friendsp = useLoaderData();

    
    return (
        <div>
            <HeroSection />
            <Friends friendsp={friendsp} />
        </div>
    );
};

export default Home;