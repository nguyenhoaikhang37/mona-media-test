import React from 'react';
import router from 'next/router';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';
import { FaRegCalendarAlt, FaExchangeAlt } from 'react-icons/fa';
// Components
import LargeButton from '@/components/commons/Button/LargeButton';
import { Radio } from '@/components/commons';

const TextGroup = ({ start, main, end, renderEnd, haveIcon }) => {
    return (
        <div className='flex flex-col'>
            <p className='text-[12px] uppercase opacity-50'>{start}</p>
            <p className='flex items-center gap-[10px] text-[24px] leading-9 text-primary capitalize'>
                {main}
                {haveIcon && (
                    <FaRegCalendarAlt
                        className='text-sm cursor-pointer'
                        onClick={() =>
                            alert('This function will come out soon')
                        }
                    />
                )}
            </p>
            {end && <p className='font-semibold'>{end}</p>}
            {renderEnd && renderEnd()}
        </div>
    );
};

const SearchFlights = () => {
    return (
        <div className='mx-auto px-[30px] pt-[30px] pb-[50px] max-w-[1230px] h-auto lg:h-[224px] rounded-[12px] bg-[white] shadow-search mt-[-170px] z-9999 relative'>
            <div className='flex flex-col lg:flex-row lg:items-center gap-[50px]'>
                <div className='flex gap-[20px]'>
                    <Radio id='1'>One way / Round-trip</Radio>
                    <Radio id='2' checked>
                        Multi-city
                    </Radio>
                </div>

                <div className='flex items-center gap-[5px] font-medium cursor-pointer'>
                    <div>
                        <strong className='text-primary'>02</strong> Adult,{' '}
                        <strong className='text-primary'>01</strong>
                        children
                    </div>
                    <MdArrowDropDown />
                </div>
                <div className='flex items-center gap-[5px] font-medium cursor-pointer'>
                    <div>Business Class</div>
                    <MdArrowDropDown />
                </div>
            </div>

            <div className='flex flex-col lg:flex-row mt-[20px] gap-[20px]'>
                <div className='flex flex-col md:flex-row gap-[20px] relative'>
                    <div className='w-[300px] border border-lightGrey pt-[15px] pb-[12px] px-[20px] rounded-[12px]'>
                        <TextGroup
                            start='from'
                            main='Da Nang'
                            end='Quang Nam, Viet Nam'
                        />
                    </div>

                    <div className='z-[1] hidden lg:block absolute w-[60px] h-[60px] bg-[white] rounded-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-l-[3px] border-l-lightGrey border-r-[3px] border-r-primary'></div>
                    <div className='z-[2] hidden lg:block absolute w-[20px] h-[100px] bg-[white] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                    <div className='z-[3] hidden lg:block cursor-pointer text-base absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                        <FaExchangeAlt
                            onClick={() =>
                                alert('This function will come out soon')
                            }
                        />
                    </div>

                    <div className='w-[300px] border-2 border-primary pt-[15px] pb-[12px] pl-[35px] pr-[20px] rounded-[12px] relative'>
                        <TextGroup
                            start='to'
                            main='Ho Chi Minh'
                            end='Viet Nam'
                        />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row w-full justify-between gap-[66px] border border-lightGrey pt-[15px] pb-[12px] px-[20px] rounded-[12px]'>
                    <div>
                        <TextGroup
                            start='departure'
                            main='Fri, 22 Mar, 2022'
                            renderEnd={() => {
                                return (
                                    <div className='flex gap-[20px]'>
                                        <p className='font-semibold cursor-pointer border-b border-[black]'>
                                            Prev
                                        </p>
                                        <p className='opacity-40 cursor-pointer'>
                                            Next
                                        </p>
                                    </div>
                                );
                            }}
                            haveIcon
                        />
                    </div>
                    <div>
                        <TextGroup
                            start='return'
                            main='Fri, 22 Mar, 2022'
                            renderEnd={() => {
                                return (
                                    <div className='flex gap-[20px]'>
                                        <p className='opacity-40 cursor-pointer'>
                                            Prev
                                        </p>
                                        <p className='opacity-40 cursor-pointer'>
                                            Next
                                        </p>
                                    </div>
                                );
                            }}
                            haveIcon
                        />
                    </div>
                </div>
            </div>

            <div className='absolute right-10 bottom-[-30px]'>
                <LargeButton
                    endIcon={<IoIosArrowRoundForward className='text-2xl' />}
                    onClick={() => {
                        router.push('/flight-schedule');
                    }}
                >
                    Search Flights
                </LargeButton>
            </div>
        </div>
    );
};

export default SearchFlights;
