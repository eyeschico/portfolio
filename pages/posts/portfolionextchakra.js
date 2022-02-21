import { Container, Badge, Link, List, ListItem, Heading, Box } from '@chakra-ui/react'
import { ExternalLinkIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/post'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { PostImage } from '../../components/post'

const Post = () => {
  return (
    <Layout title="Portfolio Next.JS / ChakraUI / Framer Motion">
      <Container>
        <Title>
        How to create a portfolio website using Next.js, Chakra UI and Framer Motion <Badge>February 15, 2022</Badge>
        </Title>

        <Section delay={0.1}>
          <PostImage src="/images/contents/nextchakramotion.png" alt="next chakra framer motion logos"/>
        </Section>


        <Section delay={0.2}>
          <P>
          For the construction of my website, I choose to use and discover {''}<Link href="https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=homepage-cta&utm_campaign=next-website" target="_blank">Next.js</Link> for its ease of use to create a Single Page Application, for a portfolio is just excellent!
          </P>

          <P>
          As I was browsing Youtube to learn more about the React framework, I came across a youtuber named {''}
          <Link href="https://www.craftz.dog/" target="_blank">
            Takuya Matsuyama
          </Link> who is a full-stack developer based in Japan. It is from {''}        
          <Link href="https://youtu.be/bSMZgXzC9AA" target="_blank">
            his video worthy of a relaxing cooking show
          </Link> that I wanted to taste the stack. Let&apos;s see what intrigued me the most during the development.
          </P>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" size="sm">
            1 - Setting up the project with Next.JS and Chakra UI
          </Heading>
          <P>
            After installing the necessary dependencies, the best practice is to have a well structured project as below.
          </P>

          <Box mx={4}>
            <strong>$PROJECT_ROOT</strong><br/>
            <strong>Pages files</strong><br/>
            <ArrowForwardIcon/><i>pages</i><br/>
            <strong>React components files</strong><br/>
            <ArrowForwardIcon/><i>components</i><br/>
            <strong>Non-react modules</strong><br/>
            <ArrowForwardIcon/><i>lib</i><br/>
            <strong>Static files for images</strong><br/>
            <ArrowForwardIcon/><i>public</i><br/>
          </Box>

          <P>It is in the <i>pages</i> folder that there will be our static pages like the main page index.js. Next also has in its component cupboard {''}<Link href="https://nextjs.org/docs/api-reference/next/head" target="_blank">
            the built-in component next/tag
          </Link> to add the title of our site and the meta tags that promote natural referencing.
          </P>

          <P>
          In the <i>layouts</i> folder, the main.js file will help me to better structure the parent components by adding for example the width of my container which will be taken into account in the whole site.
          </P>

          <P>The magic starts then by implementing Chakra UI (_app.js) with its provider especially for Next.
          {''} <Link href="https://chakra-ui.com/docs/getting-started" target="_blank">Chakra</Link> is a component library for React using props to add style, from there, it is now possible to use our components.
          </P>

        </Section>

        <Section delay={0.4}> 
          <Heading as="h4" size="sm">
            2 - Support dark themes
          </Heading>
          <P>
          {''}<Link href="https://chakra-ui.com/docs/features/color-mode" target="_blank">The addition of the dark theme with Chakra UI</Link> is even simpler, it is in the <i>lib</i> file that we have our theme (theme.js). In this file, we will have objects that will have in their fields the css properties (font style, heading, links...).
          </P>

          <P>
          Then, we initialize the theme by creating a new document with Next (_document.js) so that it takes into account the color mode in the DOM.
          </P>
        </Section>

        <Section delay={0.5}>
          <Heading as="h4" size="sm">
            3 - Animate page sections with Framer Motion
          </Heading>
          <P>
          {''}<Link href="https://www.framer.com/docs/introduction/" target="_blank">Framer Motion</Link> is a ready-to-use animation library for React from Framer. To animate our components, the library proposes ready-to-use props by giving them css animation values like <code>animate, transiton</code> ...etc 
          </P>

          <P>
          The best practice for this is to build a component that takes the parameters of how the child component will be animated.
          </P>

          <P>
          For transitions between pages, Framer offers the {''}<code><Link href="https://www.framer.com/docs/introduction/" target="_blank">AnimatePresence</Link></code> component which animates your parameter back before changing page to give that dynamic effect.
          </P>
        </Section>

        <Section delay={0.6}>
          <Heading as="h4" size="sm">
            4 - Deploy the website on Vercel
          </Heading>
          <P>
          Vercel is the best complete platform to put your work online with Next. Join your github repo with {''}<Link href="https://nextjs.org/docs/deployment" target="_blank">Vercel</Link> and deploy it.
          </P>

          <P>
          I hope you found this article useful. Feel free to check out the github repository below to learn more about this project.
          </P>
        </Section>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Repository</Meta>
          <Link href='https://github.com/eyeschico/portfolio' target="_blank">
          https://github.com/eyeschico/portfolio <ExternalLinkIcon mx="2px"/>
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.JS, Chakra UI, Framer Motion</span>
        </ListItem>
      </List>

      </Container>
    </Layout>
  )
}

export default Post