import React from 'react';
import dayjs from 'dayjs';
import FlightInfo from '@/components/FlightSchedule/share/FlightInfo';
import { renderTime } from '@/utils/helper';

const FlightDetail = ({
    name,
    freebag,
    flightNumber,
    seatRemain,
    startDate,
    endDate,
    startPoint,
    endPoint,
    duration,
    imgSrc,
}) => {
    return (
        <div className='flex flex-col lg:flex-row gap-[30px]'>
            <div className='w-full lg:w-4/12'>
                <div className='flex gap-[20px] h-full min-h-[180px] max-h-[250px]'>
                    <div className='flex flex-col justify-between items-end'>
                        <div>
                            <p className='font-semibold'>
                                {dayjs(startDate).format('HH:mm')}
                            </p>
                            <p className='text-[12px] font-thin'>
                                {dayjs(startDate).format('MM dd')}
                            </p>
                        </div>
                        <p>{renderTime(duration)}</p>
                        <div>
                            <p className='font-semibold'>
                                {dayjs(endDate).format('HH:mm')}
                            </p>
                            <p className='text-[12px] font-thin'>
                                {dayjs(endDate).format('MM dd')}
                            </p>
                        </div>
                    </div>
                    <div className='h-auto lg:h-3/4 mt-[8px] pb-[35px] lg:pb-[0px]'>
                        <div className='time-range-vertical'></div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <div>
                            <p className='font-semibold'>
                                Da nang ({startPoint})
                            </p>
                            <p className='text-[12px] font-thin'>
                                Da Nang Airport
                            </p>
                        </div>
                        <div></div>
                        <div>
                            <p className='font-semibold'>
                                Ho Chi Minh City ({endPoint})
                            </p>
                            <p className='text-[12px] font-thin'>
                                Tansonnhat Intl
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full lg:w-8/12'>
                <FlightInfo
                    title={name}
                    subTitle={`${flightNumber} · Economy`}
                    imgSrc={imgSrc}
                />
                <div className='flex flex-col lg:flex-row rounded-[12px] bg-primary-light p-[15px]'>
                    <div className='w-full lg:w-6/12 leading-[36px] lg:leading-[28px]'>
                        <p className='font-thin'>
                            Baggage{' '}
                            <strong className='text-primary font-semibold'>
                                {freebag}
                            </strong>
                        </p>
                        <p className='font-thin'>
                            In-flight{' '}
                            <strong className='text-primary font-semibold'>
                                Meal
                            </strong>
                        </p>
                        <p className='font-thin'>
                            In-flight{' '}
                            <strong className='text-primary font-semibold'>
                                Entertainment
                            </strong>
                        </p>
                    </div>
                    <div className='w-full lg:w-6/12 leading-[36px] lg:leading-[28px]'>
                        <p className='font-thin'>
                            Aircraft Airbus{' '}
                            <strong className='text-primary font-semibold'>
                                {flightNumber}
                            </strong>
                        </p>
                        <p className='font-thin'>
                            Seat layout{' '}
                            <strong className='text-primary font-semibold'>
                                {seatRemain}
                            </strong>
                        </p>
                        <p className='font-thin'>
                            Seat pitch{' '}
                            <strong className='text-primary font-semibold'>
                                29 inches (standard)
                            </strong>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightDetail;
