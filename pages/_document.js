import Document, {Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/Biennale-Bold.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                    <link
                        rel="preload"
                        href="/fonts/Biennale-Regular.otf"
                        as="font"
                        type="font/otf"
                        crossOrigin=""
                    />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}
