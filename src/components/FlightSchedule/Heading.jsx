import React from 'react';
import { HiSearch } from 'react-icons/hi';
import { FaExchangeAlt } from 'react-icons/fa';
// Components
import { Button } from '@/components/commons';

const Heading = () => {
    return (
        <div className='bg-[white] h-auto lg:h-[80px] py-4 lg:py:0 flex items-center'>
            <div className='container'>
                <div className='flex flex-col lg:flex-row items-center justify-between gap-[30px]'>
                    <div className='flex flex-col lg:flex-row max-w-[400px] w-full items-center justify-between gap-[15px]'>
                        <div>
                            <p className='text-primary text-[16px] font-semibold'>
                                Da Nang (DAD)
                            </p>
                            <p className='text-[12px] font-thin'>
                                Fri, 22 Mar, 2022
                            </p>
                        </div>
                        <div className='text-xl opacity-20'>
                            <FaExchangeAlt />
                        </div>
                        <div>
                            <p className='text-primary text-[16px] font-semibold'>
                                Ho Chi Minh (SGN)
                            </p>
                            <p className='text-[12px] font-thin'>
                                Fri, 22 Mar, 2022
                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row items-center gap-[15px] font-medium'>
                        <p>Round-trip</p>
                        <div className='w-[1px] h-[20px] bg-lightGrey'></div>
                        <p>
                            <strong className='text-primary'>02</strong> Adult,{' '}
                            <strong className='text-primary'>01</strong>
                            children
                        </p>
                        <div className='w-[1px] h-[20px] bg-lightGrey'></div>
                        <p>Business Class</p>
                    </div>
                    <div>
                        <Button endIcon={<HiSearch />} color='secondary'>
                            Change Flights
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Heading;
