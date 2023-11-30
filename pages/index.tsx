import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header, Head, Hero, Features, Map, Footer } from '../components'
import Script from 'next/script'

const Home: NextPage = () => {
  return (
    <>
      <Head />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5RFTMK8H"
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        ></iframe>
      </noscript>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-0TC4MLWLKK"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || []; 
          function gtag() {dataLayer.push(arguments);} 
          gtag('js', new Date()); 
          gtag('config', 'G-0TC4MLWLKK');  
        `}
      </Script>
      <Script id="google-tag-manager">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-5RFTMK8H');
        `}
      </Script>
      <Header />
      <Box as="main">
        <Hero />
        <Features />
        <Map />
      </Box>
      <Footer />
    </>
  )
}

export default Home
