import React from 'react';
import Banner from '../../components/homePage/Banner';
import AllBooks from '../../components/homePage/AllBooks';
import Footer from '../../components/homePage/Footer'
import StatsOverview from '../../components/homePage/StatsOverview';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <StatsOverview/>
            <AllBooks/>
            <Footer/>
            
        </div>
    );
};

export default Homepage;