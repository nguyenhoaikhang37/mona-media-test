import React from 'react';
import Image from 'next/image';
import IMAGES from '@/assets/images';

export const Empty = ({ text = 'Data is empty' }) => {
    return (
        <div className='flex flex-col items-center justify-center mt-[-50px]'>
            <Image
                src={IMAGES.emptyIcon}
                width={250}
                height={200}
                alt='Empty icon'
            />
            <p className='text-[12px] text-center font-thin mt-[-35px] whitespace-pre-line'>
                {text}
            </p>
        </div>
    );
};
