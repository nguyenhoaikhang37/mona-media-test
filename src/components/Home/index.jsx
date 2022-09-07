import React from 'react';
import Banner from '@/components/Home/Banner';
import SearchFlights from '@/components/Home/SearchFlights';

const HomePage = () => {
    return (
        <div className='relative mb-[40px]'>
            <Banner />
            <SearchFlights />
            <div className='absolute bg-primary-light w-[85%] h-[160px] bottom-[-140px] right-0 z-[-1]'></div>
        </div>
    );
};

export default HomePage;
