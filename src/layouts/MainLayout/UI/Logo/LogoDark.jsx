import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import IMAGES from '@/assets/images';

const Logo = () => {
    return (
        <Link href='/'>
            <a>
                <div className='flex items-center gap-2 cursor-pointer'>
                    <Image
                        src={IMAGES.logoDark}
                        width={148}
                        height={36}
                        alt='logo'
                    />
                    <Image
                        src={IMAGES.vnFlag}
                        width={20}
                        height={20}
                        alt='Viet Nam Flag'
                    />
                    <Image
                        src={IMAGES.americaFlag}
                        width={19}
                        height={19}
                        alt='America Flag'
                    />
                </div>
            </a>
        </Link>
    );
};

export default Logo;
