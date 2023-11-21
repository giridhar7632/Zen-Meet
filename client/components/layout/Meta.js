import Head from 'next/head'

const makeTitle = (title, name) => (title === name || !name ? title : `${title} | ${name}`)

export const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://meet-mate.vercel.app'

const Meta = ({
  title = 'MeetMate',
  name = 'Video Conferencing App for Remote Collaboration',
  description = 'MeetMate is a powerful video conferencing app that allows you to connect with colleagues, friends, and family from anywhere in the world. With advanced features such as screen sharing and chat, MeetMate makes remote collaboration easy and productive.',
  url = baseUrl,
  image = '/og.png',
  children,
}) => (
  <Head>
    <title>{makeTitle(title, name)}</title>
    <link rel="canonical" href={url} />
    <meta name="robots" content="index,follow" />
    <meta name="author" content="Giridhar Talla" />
    <meta property="description" content={description} key="description" />
    <meta property="og:url" content={url} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={url + image} key="og:image" />
    <meta property="og:title" content={makeTitle(title, name)} key="og:title" />
    <meta property="og:description" content={description} key="og:description" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={title} key="twitter:title" />
    <meta property="twitter:image" content={url + image} key="twitter:image" />
    <meta property="twitter:description" content={description} key="twitter:description" />
    <meta name="theme-color" content="#ffffff" />
    <meta name="theme-color" content="#f1f5f8" media="(prefers-color-scheme: dark)" />
    <meta name="theme-color" content="#172126" media="(prefers-color-scheme: light)" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <meta name="msapplication-TileColor" content="#ffc40d" />
    <link rel="manifest" href="/manifest.webmanifest" />
    <link rel="icon" href="/favicon.ico" />
    {children}
  </Head>
)

export default Meta
