import HHead from 'next/head'

export const Head = () => {
  return (
    <HHead>
      <title>Nail Bar</title>
      <meta
        name="description"
        content="Nail Bar - manikúra, pedikúra, nechtové štúdio"
      />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:title" content="Nail Bar" />
      <meta property="og:url" content="https://nailbar.sk" />
      <meta
        property="og:description"
        content="Nail Bar - manikúra, pedikúra, nechtové štúdio"
      />
      <meta
        property="og:image"
        content="https://www.nailbar.sk/_next/image?url=%2Flogo.png&w=640&q=75"
      />
      <meta property="og:type" content="article" />
      <meta property="og:locale" content="sk_SK" />
    </HHead>
  )
}
