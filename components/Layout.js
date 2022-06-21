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