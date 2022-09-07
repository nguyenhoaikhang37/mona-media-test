import React from 'react';

const LargeButton = ({ children, endIcon, onClick }) => {
    return (
        <button
            className='flex items-center justify-between gap-2 rounded-xl bg-primary text-[white] text-[18px] px-[20px] py-[16px]'
            onClick={onClick}
        >
            {children}
            <span className='ml-[30px]'>{endIcon && endIcon}</span>
        </button>
    );
};

export default LargeButton;
