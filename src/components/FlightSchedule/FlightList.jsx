import React from 'react';
import FlightItem from '@/components/FlightSchedule/FlightItem';
import { useFlightSchedule } from '@/components/FlightSchedule/index';
import IMAGES from '@/assets/images';

const FlightList = () => {
    const { flightList, loading } = useFlightSchedule();

    if (loading)
        return (
            <div className='mt-[30px] lg:mt-[5px]'>
                {[...Array(5)].map((_, index) => (
                    <FlightItem.Skeleton key={index} />
                ))}
            </div>
        );

    return (
        <div className='mt-[30px] lg:mt-[5px]'>
            {flightList.map((item, index) => (
                <FlightItem
                    key={index}
                    data={item}
                    imgSrc={index % 2 === 0 ? IMAGES.vnairlines : IMAGES.bamboo}
                />
            ))}
        </div>
    );
};

export default FlightList;
