import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const LoadingSkeleton = ({
    width = '100%',
    height,
    radius,
    mb = '10px',
}) => {
    return (
        <div
            className={styles.skeleton}
            style={{
                width: width,
                height: height,
                borderRadius: radius,
                marginBottom: mb,
            }}
        ></div>
    );
};

LoadingSkeleton.propTypes = {
    width: PropTypes.string,
    height: PropTypes.string,
    radius: PropTypes.string,
    mb: PropTypes.string,
};
