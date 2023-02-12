import Head from 'next/head'

const makeTitle = (title, name) => (title === name || !name ? title : `${title} | ${name}`)

const baseUrl =
  process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://zen-meet.vercel.app'

const Meta = ({
  title = 'Zen Meet',
  name = '',
  description = 'A simple video conferencing PWA with easy to use UI and fluid UX',
  image = `/og-image.png`,
  url = baseUrl,
  keywords = 'google meet,video chat,webrtc,virtual meet,video conferencing',
  children,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="language" content="English" />
      <meta name="keywords" content={keywords} />
      <meta key="og_locale" property="og:locale" content="en_US" />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_site" property="og:site_name" content={name} />
      <meta key="og_url" property="og:site_url" content={url} />

      <title key="title">{makeTitle(title, name)}</title>
      <meta key="og_title" property="og:title" content={makeTitle(title, name)} />
      <meta key="tw_title" name="twitter:title" content={makeTitle(title, name)} />

      <meta key="desc" name="description" content={description} />
      <meta key="og_desc" property="og:description" content={description} />
      <meta key="tw_desc" name="twitter:description" content={description} />

      <meta key="og_img" property="og:image" content={image} />
      <meta key="tw_card" name="twitter:card" content="summary_large_image" />
      <meta key="tw_img" name="twitter:image" content={image} />

      <link rel="manifest" href="/manifest.json" />
      <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
      <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta key="tile_color" name="msapplication-TileColor" content="#2b5797" />
      <meta key="theme_color" name="theme-color" content="#0284C7" />
      {children}
    </Head>
  )
}

export default Meta
