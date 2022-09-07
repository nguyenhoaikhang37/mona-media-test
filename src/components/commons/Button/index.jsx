import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const Button = ({
    children,
    color = 'primary',
    size = 'medium',
    variant = 'filled',
    endIcon,
    fullWidth,
    onClick = () => {
        alert('This function will come out soon');
    },
}) => {
    const primaryFilledStyles = color === 'primary' && variant === 'filled';
    const primaryGhostStyles = color === 'primary' && variant === 'ghost';
    const secondaryFilledStyles = color === 'secondary' && variant === 'filled';
    const secondaryGhostStyles = color === 'secondary' && variant === 'ghost';

    return (
        <button
            className={clsx('flex items-center gap-2 rounded-xl', {
                'bg-[white] text-primary': color === 'white',
                'bg-primary text-[white]': primaryFilledStyles,
                'bg-secondary text-[white]': secondaryFilledStyles,
                'bg-primary-light text-primary': primaryGhostStyles,
                'bg-secondary-light text-secondary': secondaryGhostStyles,
                'px-[15px] py-[6px]': size === 'small',
                'px-[16px] py-[10px]': size === 'medium',
                'w-full justify-center': fullWidth,
            })}
            onClick={onClick}
        >
            {children}
            {endIcon && endIcon}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf(['primary', 'secondary', 'white']),
    size: PropTypes.oneOf(['small', 'medium']),
    variant: PropTypes.oneOf(['filled', 'ghost']),
    endIcon: PropTypes.node,
    onClick: PropTypes.func,
    fullWidth: PropTypes.bool,
};
