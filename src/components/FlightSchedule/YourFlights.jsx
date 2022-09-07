import React from 'react';
import clsx from 'clsx';
// Components
import FlightInfo from '@/components/FlightSchedule/share/FlightInfo';
import { Button, Empty } from '@/components/commons';
import RangeTime from '@/components/FlightSchedule/share/RangeTime';
import { useFlightSchedule } from '@/components/FlightSchedule/index';
import dayjs from 'dayjs';
import { currencyFormat } from '@/utils/helper';

const ItemInfo = ({ number, title, subTitle, primary }) => {
    const formatNumber = (number) => {
        return `0${number}`.slice(-2);
    };
    return (
        <div className='flex items-center gap-[12px] mb-[15px]'>
            <div>
                <div
                    className={clsx(
                        'flex justify-center items-center w-[30px] h-[30px] rounded-full text-[white]',
                        {
                            'bg-[#979797]': !primary,
                            'bg-primary': primary,
                        }
                    )}
                >
                    {formatNumber(number)}
                </div>
            </div>
            <div>
                <p className='font-thin'>{title}</p>
                <p className='font-semibold'>{subTitle}</p>
            </div>
        </div>
    );
};

const YourFlights = () => {
    const { selectedFlight } = useFlightSchedule();
    const selectedFlightValueLength = Object.keys(selectedFlight).length;
    const {
        Duration,
        EndPoint,
        StartPoint,
        StartTime,
        EndTime,
        imgSrc,
        name,
        total,
    } = selectedFlight;

    return (
        <div className='bg-[white] rounded-[12px] shadow-lg overflow-hidden sticky top-[15px]'>
            <div className='p-[15px]'>
                <p className='uppercase font-medium'>your flights</p>
            </div>
            <div className='w-full h-[1px] bg-lightGrey'></div>
            <div className='p-[15px]'>
                {selectedFlightValueLength === 0 && (
                    <Empty
                        text={`Your flights is empty.\n Please click the "Choose" button`}
                    />
                )}
                {selectedFlightValueLength > 0 && (
                    <>
                        <ItemInfo
                            number={1}
                            title={dayjs(StartTime).format('ddd, D MMMM, YYYY')}
                            subTitle='Da Nang - Ho Chi Minh'
                        />
                        <FlightInfo
                            title={name}
                            subTitle='Details'
                            subPrimary
                            imgSrc={imgSrc}
                        />
                        <RangeTime
                            startDate={StartTime}
                            endDate={EndTime}
                            startPoint={StartPoint}
                            endPoint={EndPoint}
                            duration={Duration}
                        />
                        <div className='mb-[15px]'></div>
                        <Button variant='ghost' fullWidth>
                            Change departure flight
                        </Button>
                        <div className='w-full h-[1px] bg-lightGrey my-[15px]'></div>
                        <ItemInfo
                            number={2}
                            primary
                            title={dayjs(EndTime).format('ddd, D MMMM, YYYY')}
                            subTitle='Ho Chi Minh - Da Nang'
                        />
                    </>
                )}
            </div>
            {selectedFlightValueLength > 0 && (
                <div className='p-[15px] bg-[#F8F8F8]'>
                    <p className='font-thin'>Subtotal</p>
                    <p className='text-secondary font-semibold'>
                        {currencyFormat(total)} vnd
                    </p>
                </div>
            )}
        </div>
    );
};

export default YourFlights;
