import React from 'react';

export const Radio = ({ children, id, checked }) => {
    return (
        <div className='radio-item'>
            <input type='radio' checked={checked} name='radio' id={id} />
            <label htmlFor={id} className='font-bold'>
                {children}
            </label>
        </div>
    );
};
