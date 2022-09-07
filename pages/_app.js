import { QueryClient, QueryClientProvider } from 'react-query';
import '../styles/globals.css';
import { EmptyLayout } from '@/layouts/EmptyLayout';

function MyApp({ Component, pageProps }) {
    const Layout = Component.Layout ?? EmptyLayout;

    // Create a client
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
            },
        },
    });

    return (
        <QueryClientProvider client={queryClient}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </QueryClientProvider>
    );
}

export default MyApp;
