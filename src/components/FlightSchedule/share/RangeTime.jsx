import React from 'react';
// 3rd lib
import dayjs from 'dayjs';
// Helpers
import { renderTime } from '@/utils/helper';
// Components
import { Chip } from '@/components/commons';

const RangeTime = ({ startDate, endDate, startPoint, endPoint, duration }) => {
    return (
        <div className='flex items-center justify-between gap-[20px]'>
            <div>
                <p className='font-semibold mb-[4px]'>
                    {dayjs(startDate).format('HH:mm')}
                </p>
                <Chip>{startPoint}</Chip>
            </div>
            <div className='w-3/5 text-center'>
                <p className='font-thin'>{renderTime(Number(duration))}</p>
                <div className='time-range-horizontal'></div>
                <p className='font-thin text-[12px]'>Direct</p>
            </div>
            <div>
                <p className='font-semibold mb-[4px]'>
                    {dayjs(endDate).format('HH:mm')}
                </p>
                <Chip>{endPoint}</Chip>
            </div>
        </div>
    );
};

export default RangeTime;
