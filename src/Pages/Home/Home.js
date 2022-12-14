import React from 'react';
import FirstSection from './FirstSection';
import LeftCartContainer from './LeftCartContainer';
import RightCardContainer from './RightCardContainer';
import SecondSection from './SecondSection';

const Home = () => {
    return (
        <div className='backgroundColor w-full grid grid-cols-1 lg:grid-cols-3 gap-5 xl:container'>
            <div className='hidden lg:flex'>
                <LeftCartContainer />
            </div>
            <div>
                <FirstSection />
                <SecondSection />
            </div>
            <div className='hidden lg:flex'>
                <RightCardContainer />
            </div>
        </div>
    );
};

export default Home;