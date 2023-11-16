import HHead from 'next/head'

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
    </HHead>
  )
}
