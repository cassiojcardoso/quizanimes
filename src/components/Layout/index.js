import Link from 'next/link'
import Head from 'next/head'

export default function Layout({
  children,
  ogImage,
  title = 'AnimeQuiz',
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
      </Head>
      {children}
    </>
  )
}