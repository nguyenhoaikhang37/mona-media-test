import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
// 3rd lib
import clsx from 'clsx';
import { HiSearch } from 'react-icons/hi';
// Components
import { Button } from '@/components/commons';
import LogoDark from '@/layouts/MainLayout/UI/Logo/LogoDark';

const Header = () => {
    const router = useRouter();
    const activeStyles = 'rounded-[100px] bg-primary-lighter';

    return (
        <header className='z-[9999]'>
            <div className='container flex items-center justify-between h-[80px]'>
                {/*Logo*/}
                <LogoDark />
                {/*Navbar*/}
                <nav>
                    <ul className='hidden lg:flex items-center gap-[30px]'>
                        <li
                            className={clsx('px-[15px] py-[10px]', {
                                [activeStyles]: router.pathname == '/promotion',
                            })}
                        >
                            <Link href='/promotion'>
                                <a>Promotion</a>
                            </Link>
                        </li>
                        <li
                            className={clsx('px-[15px] py-[10px]', {
                                [activeStyles]:
                                    router.pathname == '/flight-schedule',
                            })}
                        >
                            <Link href='/flight-schedule'>
                                <a>Flight Schedule</a>
                            </Link>
                        </li>
                        <li
                            className={clsx('px-[15px] py-[10px]', {
                                [activeStyles]: router.pathname == '/about-us',
                            })}
                        >
                            <Link href='/about-us'>
                                <a>About us</a>
                            </Link>
                        </li>
                        <li
                            className={clsx('px-[15px] py-[10px]', {
                                [activeStyles]:
                                    router.pathname == '/payment-guide',
                            })}
                        >
                            <Link href='/payment-guide'>
                                <a>Payment Guide</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/*Button*/}
                <Button endIcon={<HiSearch />} color='primary'>
                    Booking now
                </Button>
            </div>
        </header>
    );
};

export default Header;
