import React from 'react';
import { useRouter } from 'next/router';
import TransparentHeader from '@/layouts/MainLayout/UI/Header/TransparentHeader';
import DefaultHeader from '@/layouts/MainLayout/UI/Header/DefaultHeader';
import Footer from '@/layouts/MainLayout/UI/Footer';

const MainLayout = ({ children }) => {
    const router = useRouter();

    return (
        <div className='flex flex-col min-h-[100vh]'>
            {router.pathname === '/' && <TransparentHeader />}
            {router.pathname !== '/' && <DefaultHeader />}

            <main className='flex-grow'>{children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
