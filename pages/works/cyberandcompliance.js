import { Container, Badge, Link, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import ReactPlayer from 'react-player'

const CnC = () => {
  return (
    <Layout title="Cyber & Compliance Fair">
      <Container>
        <Title>
          Cyber & Compliance Fair<Badge>2021</Badge>
        </Title>

        <Section delay={0.2}>
          <P>
          The Cyber and Compliance Fair is an event taking place in Luxembourg, organized by {''}
          <Link href="https://www.bllconsulting.com/" target="_blank">
            BLL Consulting
          </Link> with the support of {''}
          <Link href="https://securitymadein.lu/" target="_blank">
            SECURITYMADEIN.LU
          </Link>. Their need was to have a mobile application for the visitors of the show.
          </P>
          <SimpleGrid 
            columns={[1,1,1]} 
            gap={2} 
            mt={4}
          >
            <WorkImage src="/images/works/cyberncompliance.png" alt="cyber and compliance banner"/>
          </SimpleGrid>  
        </Section>

        <Section delay={0.3}>
          <P>
          Visitors have access to the agenda of the event, see which speaker is present and be able to exchange their contact information with a QR code.
          </P>
          <P>
          This experience was very enjoyable because I was able to discover React Native and work in a group in the same repository with one branch for production and development. For these two weeks of work we adopted the Kanban agile method.
          </P>

        </Section>

        <Section delay={0.4}>
          <List ml={4} my={4}>
            <ListItem>
              <Meta>Test run</Meta>
              <span>
              <ReactPlayer 
                url='https://youtu.be/gBUlnSfiX8c'
                width={300} height={600}
              /> 
              </span>
            </ListItem>
            <ListItem mt={4}>
              <Meta>Stack</Meta>
              <span>React Native</span>
            </ListItem>
          </List>
        </Section>

      </Container>
    </Layout>
  )
}

export default CnC