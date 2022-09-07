import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const FlightInfo = ({ title, subTitle, subPrimary, imgSrc }) => {
    return (
        <div className='flex items-center gap-[12px] mb-[15px]'>
            <div>
                <Image src={imgSrc} width={30} height={30} alt={title} />
            </div>
            <div>
                <p className='font-semibold tracking-widest uppercase'>
                    {title}
                </p>
                <p
                    className={clsx('text-[12px] font-thin', {
                        'cursor-pointer underline text-primary font-medium':
                            subPrimary,
                    })}
                >
                    {subTitle}
                </p>
            </div>
        </div>
    );
};

export default FlightInfo;
