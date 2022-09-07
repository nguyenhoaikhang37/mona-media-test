import React from 'react';
import FlightInfo from '@/components/FlightSchedule/share/FlightInfo';
import { currencyFormat } from '@/utils/helper';

const FareInfo = ({
    name,
    flightNumber,
    priceAdult,
    noRefund,
    taxAdult,
    imgSrc,
}) => {
    const total = priceAdult + taxAdult;

    return (
        <div className='flex flex-col lg:flex-row gap-[30px]'>
            <div className='w-full lg:w-4/12'>
                <p className='font-semibold uppercase mb-[15px]'>Conditions</p>
                <FlightInfo
                    title={name}
                    subTitle={`${flightNumber} · Economy`}
                    imgSrc={imgSrc}
                />
                <div className='flex gap-[20px]'>
                    <div>
                        <p>Da Nang</p>
                        <p className='text-[12px] text-primary font-thin'>
                            Economy
                        </p>
                    </div>
                    <div className='w-1/5 self-start mt-1.5'>
                        <div className='time-range-horizontal'></div>
                    </div>
                    <div>
                        <p>Ho Chi Minh City</p>
                    </div>
                </div>
                <p className='text-[12px] font-thin mt-[15px]'>
                    {noRefund ? 'Non' : 'Have'} - Refundable
                </p>
            </div>
            <div className='w-full lg:w-8/12'>
                <p className='font-semibold uppercase mb-[15px]'>
                    price details
                </p>
                <div className='font-thin max-w-[390px] w-full'>
                    <div className='flex items-center justify-between leading-[28px]'>
                        <p>Adult Basic Fare (x1)</p>
                        <p className='font-semibold'>
                            {currencyFormat(priceAdult)} vnd
                        </p>
                    </div>
                    <div className='flex items-center justify-between leading-[28px]'>
                        <p>Tax</p>
                        <p>{currencyFormat(taxAdult)} vnd</p>
                    </div>
                    <div className='flex items-center justify-between leading-[28px]'>
                        <p>Regular Total Price</p>
                        <p>{currencyFormat(total)} vnd</p>
                    </div>
                    <div className='flex items-center justify-between leading-[28px]'>
                        <p className='text-secondary'>Save</p>
                        <p>0 vnd</p>
                    </div>
                    <div className='flex-1 w-full h-[1px] bg-lightGrey my-[5px]'></div>
                    <div className='flex items-center justify-between leading-[28px]'>
                        <p>You pay</p>
                        <p className='text-secondary font-semibold'>
                            {currencyFormat(total)} vnd
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FareInfo;
