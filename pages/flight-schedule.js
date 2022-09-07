import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import FlightSchedulePage from '@/components/FlightSchedule';
import { Seo } from '@/components/commons';

const FlightSchedule = () => {
    return (
        <>
            <Seo
                data={{
                    title: 'Mona Media | Lịch bay',
                    description: 'Mona Media ReactJS Test',
                    url: 'https://learn-nextjs-fawn.vercel.app/',
                    thumbnailUrl:
                        'https://websitekhachsan.vn/wp-content/uploads/2020/05/icon-mona-128x128-1.png',
                }}
            />

            <FlightSchedulePage />
        </>
    );
};

FlightSchedule.Layout = MainLayout;

export default FlightSchedule;
