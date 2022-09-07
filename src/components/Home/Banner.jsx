import React from 'react';

const Banner = () => {
    return (
        <div className='w-full h-[85vh] bg-hero-bg bg-center bg-no-repeat mt-[-80px] relative'>
            <div className='container'>
                <h1 className='text-[50px] lg:text-[72px] font-light absolute top-1/3 lg:top-1/4'>
                    Hello!
                    <br />
                    Where are
                    <br />
                    you <strong className='text-primary'>flying</strong> to ...
                </h1>
            </div>
        </div>
    );
};

export default Banner;
