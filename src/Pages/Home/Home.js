import React from 'react';
import FirstSection from './FirstSection';
import LeftCartContainer from './LeftCartContainer';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div className='backgroundColor grid grid-cols-1 lg:grid-cols-3 gap-3 '>
            <div className='hidden lg:flex'>
                <LeftCartContainer />
            </div>
            <div>
                <FirstSection />
                <SecondSection />
            </div>
        </div>
    );
};

export default Home;