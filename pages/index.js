import NextLink from 'next/link'
import {
  Link, 
  Button,
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'


const Page = () => {
  return (
    <Container>

      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
        Hello, I'm a web and mobile developer based in France!
      </Box>

      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page=title">
            Mohammed Khalef
          </Heading>
          <p>Web Developer, 3D Artist</p>
        </Box>

        <Box 
          flexShrink={0} 
          mt={{base: 4, md: 0}}
          ml={{md: 6}}
          align="center"
          >
          <Image 
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/mohammed.jpg"
            alt="Profile Image"
            />
        </Box>
      </Box>

    <Section delay={0.1}>
      <Heading as="h3" variant="section-title">
        About me
      </Heading>

      <Paragraph>
      As far back as I can remember, I have always had this desire to make real what comes into my mind , whether by drawing it or more recently by developing it.
      </Paragraph>

      <Box align="center" my={4}>
        <NextLink href="/works">
          <Button 
            rightIcon={<ChevronRightIcon/>} 
            colorScheme="teal">
              My portfolio
          </Button>
        </NextLink>
      </Box>
    </Section>

    <Section delay={0.2}>
      <Heading as="h3" variant="section-title">
        Bio
      </Heading>

      <BioSection>
        <BioYear>1996</BioYear>
        Born in Oran (وهران), Algeria.
      </BioSection>
      <BioSection>
        <BioYear>2021</BioYear>
        Graduate Of the European level 5 professional title : web and mobile web developer at {''}
        <Link href="https://occitanie.simplon.co/">
          Simplon
        </Link>
      </BioSection>
    </Section>

    <Section delay={0.3}>
      <Heading as="h3" variant="section-title">
        I love
      </Heading>

      <Paragraph>
        Art, Drawing, 3D, Soccer, Fighting Sports, Metaverse Era, Virtual Reality
      </Paragraph>


    </Section>
    </Container>
  )
}

export default Page