import NextLink from 'next/link'
import {
  Link, 
  Button,
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue,
  List,
  ListItem,
  Icon,
  SimpleGrid,
} from '@chakra-ui/react'
import { ChevronRightIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import { PostGridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'

import WebsiteOpening from '../public/images/contents/nextchakramotion.png'



const Home = () => {
  return (
    <Layout>
      <Container>

        <Box 
          borderRadius="lg" 
          bg={useColorModeValue('white', 'green.800')} 
          boxShadow='base'
          p={3} 
          mb={6} 
          mt={6} 
          align="center"
        >
          Hello, I&apos;m actually open to work!
        </Box>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page=title">
              Mohammed Khalef
            </Heading>
            <p>Web Developer</p>
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
            As far as I can remember, I always had this desire to make real what comes into my mind , whether by drawing it or more recently by developing it. 
          </Paragraph>

          <Paragraph>
            At the moment, I&apos;m training on the Symfony PHP framework and the javascript universe. In parallel I&apos;m looking for opportunities in the Toulouse sector.
          </Paragraph>

          <Paragraph>
            <strong><ArrowForwardIcon/>contact@mohammedkhalef.com</strong>
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button 
                rightIcon={<ChevronRightIcon/>} 
                colorScheme="purple">
                  Take a look at my Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Diploma
          </Heading>

          <BioSection>
            <BioYear>2021</BioYear>
            Graduate Of the European level 5 professional title : Web and Mobile Web Developer at {''}
            <Link href="https://simplon.co/la-pedagogie-simplon.html" target="_blank">
              Simplon
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Certification
          </Heading>

          <BioSection>
            <BioYear>2021</BioYear>
            Opquast Certified : Quality control in Web projects - {''}
            <Link href="https://directory.opquast.com/fr/certificat/W152ZO/" target="_blank">
            Advanced level
            </Link>
            <Box my={4}>
              <Image 
                maxWidth="100px"
                align="center"
                boxShadow="base"
                src="/images/badge-advanced.png"
                alt="Opquast Badge"
              />
            </Box>
          </BioSection>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Posts
          </Heading>
          <Paragraph>
          Below you will find my latest posts and technological watches related to the digital world.
          </Paragraph>
          <SimpleGrid 
            columns={[1,2,2]} 
            gap={6} 
            mt={5}
            
          >
            <PostGridItem 
              id="portfolionextchakra"
              title="How to create a Portfolio using Next.JS, Chakra UI and Framer Motion"  
              thumbnail={WebsiteOpening}
            />
          </SimpleGrid>  

          <Box align="center" my={4}>
            <NextLink href="/posts">
              <Button 
                rightIcon={<ChevronRightIcon/>} 
                colorScheme="purple">
                  Posts
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <Paragraph>
            Art, Drawing, 3D, Soccer, Fighting Sports, Metaverse Era, Virtual Reality, New Technologies.
          </Paragraph>
        </Section>

        <Section delay={0.6}> 
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/eyeschico" target="_blank">
                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @eyeschico
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://twitter.com/eyeschico" target="_blank">
                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoTwitter}/>}>
                  @eyeschico
                </Button>
              </Link>
            </ListItem>

            <ListItem>
              <Link href="https://www.linkedin.com/in/mohammedkhalef/" target="_blank">
                <Button variant="ghost" colorScheme="cyan" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  Mohammed Khalef
                </Button>
              </Link>
            </ListItem>

          </List>
        </Section>

      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'