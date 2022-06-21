import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children, pageTitle, guitarra}) => {
  return (
    <div>
      <Head>
        <title>GuitarES - {pageTitle}</title>
        <meta name="description" content="Sitio web de venta de guitarras" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
{/* eslint-disable-next-line @next/next/no-page-custom-font */}
<link href="https://fonts.googleapis.com/css2?family=Anek+Odia:wght@200;300;400;500;600&family=Outfit:wght@400;700;900&family=PT+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet"/>
      </Head>

      <Header
        guitarra={guitarra}
      />

      {children}

      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout