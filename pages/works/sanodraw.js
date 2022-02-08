import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Sano Draw">
      <Container>
        <Title>
          Sano Draw <Badge>2022</Badge>
        </Title>
        <P>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://sano-draw.netlify.app/'>
              https://sano-draw.netlify.app/ <ExternalLinkIcon mx="2px"/>
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Strapi, React</span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/sanodraw-screen.png" alt="Sano Draw"/>
      </Container>
    </Layout>
  )
}

export default Work