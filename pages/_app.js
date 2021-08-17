import '../styles/globals.css'
import "tailwindcss/tailwind.css"

import React from 'react'
import Head from "next/head";
import Script from 'next/script'

import Header from '../components/Header'
import Footer from '../components/Footer'



function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet"></link>

        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="description" content="This is the branding sites for Zylker HR." />
        
      </Head>

        <Header />

        <Component {...pageProps} />
        <Script
          dangerouslySetInnerHTML={{
            __html: `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "0442bfbcdf416b7012fa31e9d1b16ea48f1d24f7f69625ebff1c70712c95a79b", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`
          }} />
        <Footer />
    </React.Fragment>
  )
}

export default MyApp
