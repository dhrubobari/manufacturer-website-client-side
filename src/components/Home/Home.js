import React from 'react';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import CustomerReview from '../CustomerReview/CustomerReview';
import Tools from '../Tools/Tools';
import Banner from './Banner';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        </>
    );
};

export default Home;