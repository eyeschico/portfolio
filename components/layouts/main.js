import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="As far as I can remember, I always had this desire to make real what comes into my mind , whether by drawing it or more recently by developing it." />
        <meta name="author" content="Mohammed Khalef"/>
        <meta name="author" content="eyeschico"/>

        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eyeschico" />
        <meta name="twitter:creator" content="@eyeschico" />
        <meta name="twitter:image" content="/card.png" />

        <meta property="og:image" content="/card.png" />
        <meta property="og:site_name" content="Mohammed Khalef - Web Developer" />
        <meta property="og:type" content="website" />
        <title>Mohammed Khalef - Web Developer</title>
      </Head>

      <Navbar path={router.asPath}/>

      <Container maxW="container.lg.md" pt={14}>
        {children}
        <Footer/>
      </Container>
    </Box>
  )
}

export default Main