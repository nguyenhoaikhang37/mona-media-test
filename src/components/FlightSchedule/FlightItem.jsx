import React, { useId } from 'react';
import Image from 'next/image';
// 3rd lib
import clsx from 'clsx';
// Utils
import IMAGES from '@/assets/images';
import { currencyFormat } from '@/utils/helper';
import { useFlightSchedule } from '@/components/FlightSchedule/index';
// Components
import FlightInfo from '@/components/FlightSchedule/share/FlightInfo';
import RangeTime from '@/components/FlightSchedule/share/RangeTime';
import { Button, LoadingSkeleton } from '@/components/commons';
import FlightDetail from '@/components/FlightSchedule/FlightDetail';
import FareInfo from '@/components/FlightSchedule/FareInfo';

const FlightItem = ({ data, imgSrc }) => {
    const {
        GroupClass,
        PriceAdult,
        TaxAdult,
        Duration,
        Carryon,
        Freebag,
        FlightNumber,
        StartDate,
        EndDate,
        StartPoint,
        EndPoint,
        NoRefund,
        SeatRemain,
        RelatedFlights,
    } = data;
    const { onSelected, selectedFlight } = useFlightSchedule();
    const id = useId();
    const [active, setActive] = React.useState('flight-detail');
    const total = PriceAdult + TaxAdult;

    return (
        <div className='bg-[white] rounded-[12px] p-[20px] mb-[10px]'>
            <div className='flex flex-col lg:flex-row lg:items-center justify-between gap-[30px]'>
                <div>
                    <FlightInfo title={GroupClass} imgSrc={imgSrc} />
                </div>
                <div className='max-w-[200px]  w-full'>
                    <RangeTime
                        startDate={StartDate}
                        endDate={EndDate}
                        startPoint={StartPoint}
                        endPoint={EndPoint}
                        duration={Duration}
                    />
                </div>
                <div className='max-w-[300px]'>
                    <div className='flex items-center justify-between gap-[30px]'>
                        <div className='flex items-start gap-[7px]'>
                            <Image
                                src={IMAGES.baggageIcon}
                                width={14}
                                height={14}
                                alt=''
                            />
                            <p className='font-thin'>
                                Baggage{' '}
                                <strong className='font-semibold text-primary'>
                                    {Carryon === '' ? '0kg' : Carryon}
                                </strong>
                            </p>
                        </div>
                        <p className='opacity-50 line-through'>
                            {Carryon === '' ? 0 : '999,999'} vnd
                        </p>
                    </div>
                    <div className='flex items-center justify-between gap-[30px] mt-[10px]'>
                        <div className='flex items-start gap-[7px]'>
                            <Image
                                src={IMAGES.mealIcon}
                                width={14}
                                height={14}
                                alt=''
                            />
                            <p className='font-thin'>
                                In-flight{' '}
                                <strong className='font-semibold text-primary'>
                                    Meal
                                </strong>
                            </p>
                        </div>
                        <p className='text-secondary'>
                            {currencyFormat(total)} vnd
                        </p>
                    </div>
                </div>
                <div>
                    <Button
                        size='small'
                        color='secondary'
                        variant={selectedFlight.id === id ? 'filled' : 'ghost'}
                        onClick={() =>
                            onSelected({
                                ...RelatedFlights[0],
                                id,
                                imgSrc,
                                name: GroupClass,
                                total,
                            })
                        }
                    >
                        Choose
                    </Button>
                </div>
            </div>
            <div className='my-[20px] flex items-center gap-[30px] text-[12px] uppercase'>
                <p
                    className={clsx('cursor-pointer', {
                        'opacity-40': active !== 'flight-detail',
                        'font-semibold text-primary border-b border-primary':
                            active === 'flight-detail',
                    })}
                    onClick={() => setActive('flight-detail')}
                >
                    Flight detail
                </p>
                <p
                    className={clsx('cursor-pointer', {
                        'opacity-40': active !== 'fare-info',
                        'font-semibold text-primary border-b border-primary':
                            active === 'fare-info',
                    })}
                    onClick={() => setActive('fare-info')}
                >
                    Fare info
                </p>
                <div className='flex-1 h-[1px] bg-lightGrey'></div>
            </div>

            {active === 'flight-detail' && (
                <FlightDetail
                    name={GroupClass}
                    freebag={Freebag}
                    flightNumber={FlightNumber}
                    seatRemain={SeatRemain}
                    startDate={StartDate}
                    endDate={EndDate}
                    startPoint={StartPoint}
                    endPoint={EndPoint}
                    duration={Duration}
                    imgSrc={imgSrc}
                />
            )}
            {active === 'fare-info' && (
                <FareInfo
                    priceAdult={PriceAdult}
                    flightNumber={FlightNumber}
                    noRefund={NoRefund}
                    taxAdult={TaxAdult}
                    name={GroupClass}
                    imgSrc={imgSrc}
                />
            )}
        </div>
    );
};

FlightItem.Skeleton = () => {
    return <LoadingSkeleton height='330px' radius='12px' />;
};

export default FlightItem;
