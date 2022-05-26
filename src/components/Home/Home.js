import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Review from '../Review/Review';
import Tools from '../Tools/Tools';
import Banner from './Banner';
import Footer from './Footer';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Review></Review>
        <Footer></Footer>
        </>
    );
};

export default Home;