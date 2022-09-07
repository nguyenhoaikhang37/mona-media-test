import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import clsx from 'clsx';
import IMAGES from '@/assets/images';

const FooterItem = ({ children, src }) => {
    return (
        <div className='flex items-center gap-[5px]'>
            <Image width={18} height={18} src={src} alt='Social Icon' />
            <p>{children}</p>
        </div>
    );
};

const Footer = () => {
    const router = useRouter();

    return (
        <footer
            className={clsx({
                'bg-primary-light': router.pathname !== '/',
            })}
        >
            <div className='flex flex-col lg:flex-row container items-center justify-between h-auto lg:h-[80px] gap-[30px] my-10 lg:my-0'>
                <div className='flex flex-col lg:flex-row items-center gap-[30px]'>
                    <FooterItem src={IMAGES.phoneIcon}>
                        Call us: <a href='tel:+84908020258'>+84 908 02 02 58</a>
                    </FooterItem>
                    <FooterItem src={IMAGES.mailIcon}>
                        Email:{' '}
                        <a href='mailto:chucinog@gmail.com'>
                            chucinog@gmail.com
                        </a>
                    </FooterItem>
                </div>
                <div className='flex items-center gap-[10px]'>
                    <p>Follow us</p>
                    <div className='w-[40px] h-[1px] bg-[black]'></div>
                    <Image
                        width={18}
                        height={18}
                        src={IMAGES.fbIcon}
                        alt='Social Icon'
                    />
                    <Image
                        width={18}
                        height={18}
                        src={IMAGES.insIcon}
                        alt='Social Icon'
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
