import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)

        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="manifest" href="/manifest.json" />

                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <link rel="apple-touch-icon" href="/assets/favicon/icon144.png" />
                    <link rel="apple-touch-startup-icon" href="/assets/favicon/icon144.png" />

                    <link rel="shortcut icon" href="/assets/favicon/favicon.ico" type="image/x-icon" />

                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&display=swap" />

                    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#0d6efd" />
                    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />

                    <link rel="stylesheet" href="/assets/plugins/fontawesome/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="/assets/plugins/fontawesome/css/brands.min.css" />
                    <link rel="stylesheet" href="/assets/plugins/fontawesome/css/light.min.css" />

                    <link rel="stylesheet" media="(prefers-color-scheme: light)" href="/assets/plugins/bootstrap/bootstrap.min.css" />
                    <link rel="stylesheet" media="(prefers-color-scheme: dark)" href="/assets/plugins/bootstrap/bootstrap.night.min.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument