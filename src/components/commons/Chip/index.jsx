import React from 'react';
import PropTypes from 'prop-types';

export const Chip = ({ children }) => {
    return (
        <div className='uppercase text-center font-semibold text-[10px] px-1 py-0.5 bg-primary-light rounded-full text-primary'>
            {children}
        </div>
    );
};

Chip.propTypes = {
    children: PropTypes.string,
};
