import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container} from '@chakra-ui/react'
import Footer from '../footer'

const Main = ({children, router}) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Mohammed's homepage" />
        <meta name="author" content="Mohammed Khalef"/>
        <meta name="author" content="eyeschico"/>
        <meta property="og:site_name" content="Mohammed Khalef's Homepage" />
        <meta property="og:type" content="website" />
        <title>Mohammed Khalef</title>
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