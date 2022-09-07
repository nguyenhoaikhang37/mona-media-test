import { Seo } from '@/components/commons';
import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/components/Home';

export default function Home() {
    return (
        <>
            <Seo
                data={{
                    title: 'Mona Media | Trang chủ',
                    description: 'Mona Media ReactJS Test',
                    url: 'https://mona-media-test-three.vercel.app/',
                    thumbnailUrl:
                        'https://websitekhachsan.vn/wp-content/uploads/2020/05/icon-mona-128x128-1.png',
                }}
            />

            <HomePage />
        </>
    );
}

Home.Layout = MainLayout;
