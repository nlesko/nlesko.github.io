import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  const description =
    "Nikola Leško - Web developer";
  const title = "Nikola Leško - Web developer";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {/* <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="theme-color" content="#000000" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
