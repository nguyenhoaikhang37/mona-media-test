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
                    url: 'https://mona-media-test-three.vercel.app/',
                    thumbnailUrl:
                        'https://websitekhachsan.vn/wp-content/uploads/2020/05/icon-mona-128x128-1.png',
                }}
            />
            {/*a*/}
            <div></div>
            <FlightSchedulePage />
        </>
    );
};

FlightSchedule.Layout = MainLayout;

export default FlightSchedule;
