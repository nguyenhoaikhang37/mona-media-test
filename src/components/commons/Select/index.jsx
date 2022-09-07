import React from 'react';

export const Select = ({ defaultOption, options }) => {
    return (
        <select
            id='small'
            className='block px-3 py-2 w-full text-sm rounded-lg bg-[white] font-thin'
        >
            <option defaultValue={defaultOption}>{defaultOption}</option>
            {options.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.label}
                </option>
            ))}
        </select>
    );
};
