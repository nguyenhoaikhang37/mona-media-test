import React from 'react';
import { Select } from '@/components/commons';

const selectList = [
    {
        defaultOption: 'Transit',
        optionList: [
            {
                value: 't1',
                label: 'Ghe 1',
            },
            {
                value: 't2',
                label: 'Ghe 2',
            },
        ],
    },
    {
        defaultOption: 'Time',
        optionList: [
            {
                value: 'ti1',
                label: '1/1/2023',
            },
            {
                value: 'ti2',
                label: '2/1/2023',
            },
        ],
    },
    {
        defaultOption: 'Airline',
        optionList: [
            {
                value: 'a1',
                label: 'VietNam Airline',
            },
            {
                value: 'a2',
                label: 'Emirates',
            },
        ],
    },
    {
        defaultOption: 'Low Price',
        optionList: [
            {
                value: 'l1',
                label: 'High Price',
            },
        ],
    },
];

const Filter = () => {
    return (
        <div className='flex items-center justify-end'>
            <p className='uppercase opacity-50 text-[12px]'>Filter</p>
            <div className='ml-[15px] flex items-center gap-[5px]'>
                {selectList.map((item, index) => (
                    <Select
                        key={item.defaultOption}
                        defaultOption={item.defaultOption}
                        options={item.optionList}
                    />
                ))}
            </div>
        </div>
    );
};

export default Filter;
