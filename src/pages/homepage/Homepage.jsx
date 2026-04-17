import React from 'react';
import Banner from '../../components/homePage/Banner';
import AllBooks from '../../components/homePage/AllBooks';
import Footer from '../../components/homePage/Footer'

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <AllBooks/>
            <Footer/>
            
        </div>
    );
};

export default Homepage;