import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="adacraft">
      <Container>
        <Title>
          adacraft <Badge>2021</Badge>
        </Title>

        <P>
        Founded and maintained by Nicolas Decoster ({''}
          <Link href="https://twitter.com/ogadaki" target="_blank">
          @ogadaki
          </Link>), adacraft is a tool for creating things using block programming. It's a fork of Scratch from MIT. I had the pleasure to contribute to the application a few times.
        </P>

        <SimpleGrid 
          columns={[1,1,2]} 
          gap={2} 
          mt={4}
        >
          <WorkImage src="/images/works/adacraft-block.png" alt="adacraft block example"/>
          <WorkImage src="/images/works/adacraft-render.png" alt="adacraft render example"/>
        </SimpleGrid>  

        <P>
          My most significant experiences are adding links to the social networks of adacraft users and add a backup history for user projects.
        </P>
        <P>
          These experiences allowed me to discover the Vue javascript framework and its ecosystem by creating and manipulating reusable components in the application.
        </P>


          <WorkImage src="/images/works/socialmediaslinks-adacraft.png" alt="social medias links screen"/>



        <WorkImage src="/images/works/history-projects.png" alt="history projects screen"/>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://beta.adacraft.org/'>
            https://beta.adacraft.org/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Vue, Tailwind and FaunaDB</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work