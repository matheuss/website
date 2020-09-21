import Head from 'next/head'

import '../styles/tailwind.css'
import '../styles/index.css'
import '../styles/util.css'

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <meta charSet="utf-8" />
      <title>Matheus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="theme-color" content="#ffffff"></meta>
      <link
        rel="preload"
        href="inter-var-latin.woff2"
        as="font"
        type="font/woff2"
      />
      <link
        rel="preload"
        href="/no-tacos-allowed.png"
        as="image"
      />

    </Head>
    <Component {...pageProps} />
  </>
}