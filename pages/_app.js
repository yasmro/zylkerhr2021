import '../styles/globals.css'
import "tailwindcss/tailwind.css"

import React from 'react'
import Head from "next/head";

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@0,200;0,400;0,700;1,200;1,400;1,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" />

        <meta name="msapplication-TileColor" content="#b91d47" />
        <meta name="theme-color" content="#fafafa" />
        <meta name="description" content="This is the branding sites for Zylker HR." />
        
      </Head>

        <Header />

        <Component {...pageProps} />
        
        <Footer />
    </React.Fragment>
  )
}

export default MyApp
