import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Review from '../Review/Review';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Review></Review>
        </>
    );
};

export default Home;