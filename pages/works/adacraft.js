import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Adacraft = () => {
  return (
    <Layout title="adacraft">
      <Container>
        <Title>
          adacraft <Badge>2021</Badge>
        </Title>

        <Section delay={0.2}>
          <P>
          Founded and maintained by Nicolas Decoster ({''}
            <Link href="https://twitter.com/ogadaki" target="_blank">
            @ogadaki
            </Link>), adacraft is a tool for creating things using block programming. It&apos;s a fork of Scratch from MIT. I had the pleasure to contribute to the application a few times.
          </P>
          <SimpleGrid 
            columns={[1,1,2]} 
            gap={2} 
            mt={4}
          >
            <WorkImage src="/images/works/adacraft-block.png" alt="adacraft block example"/>
            <WorkImage src="/images/works/adacraft-render.png" alt="adacraft render example"/>
          </SimpleGrid>  
        </Section>

        <Section delay={0.3}>
          <P>
            My most significant experiences are adding links to the social networks of adacraft users and add a backup history for user projects.
          </P>
          <P>
            These experiences allowed me to discover the Vue javascript framework and its ecosystem by creating and manipulating reusable components in the application.
          </P>
          <WorkImage src="/images/works/socialmediaslinks-adacraft.png" alt="social medias links screen"/>
          <WorkImage src="/images/works/history-projects.png" alt="history projects screen"/>
        </Section>

        <Section delay={0.4}>
          <P>
            I also played with the serverless database {''}
            <Link href="https://fauna.com/" target="_blank">
            Fauna
            </Link> to implement a collective management so that users can work on the same project. I really liked working with Fauna because it has its own query syntax and their documentation is very clear.
          </P>
          <WorkImage src="/images/works/adacraft-collective.png" alt="adacraft collective screen"/>
        </Section>

        <Section delay={0.5}>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Website</Meta>
              <Link href='https://www.adacraft.org/'>
              https://www.adacraft.org/ <ExternalLinkIcon mx="2px"/>
              </Link>
            </ListItem>
            <ListItem>
              <Meta>Stack</Meta>
              <span>Vue, Tailwind and Fauna</span>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  )
}

export default Adacraft