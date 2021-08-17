import Head from 'next/head'

export default function CommonMeta({ title = "", description = "" }) {

  return (
    <Head>
      <title>{title} | Zylker HR | Branding Site</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={`${process.env.SITE_URL}/ogp_large.png`} /> */}
      <meta name="twitter:card" content="summary_large_image"/>
    </Head>
  )
}