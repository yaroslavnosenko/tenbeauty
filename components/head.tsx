import HHead from 'next/head'
import Script from 'next/script'

export const Head = () => {
  return (
    <HHead>
      <title>Ten Beauty Space | Manikúra, Pedikúra, Obočie</title>
      <meta
        name="description"
        content="Ten Beauty Space - manikúra, pedikúra, nechtové štúdio"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta
        property="og:title"
        content="Ten Beauty Space | Manikúra, Pedikúra, Obočie"
      />
      <meta property="og:url" content="https://tenbeauty.sk" />
      <meta
        property="og:description"
        content="Ten Beauty Space - manikúra, pedikúra, nechtové štúdio"
      />
      <meta
        property="og:image"
        content="https://www.tenbeauty.sk/_next/image?url=%2Flogo.jpeg&w=640&q=75"
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="sk_SK" />
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
    </HHead>
  )
}
