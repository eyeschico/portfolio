
import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbAdacraft from '../public/images/works/adacraft-logo.png'
import thumbCyberNCompliance from '../public/images/works/cyberncompliance.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={26} mb={4} mt={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={4}>
        <Section delay={0.1}>
          <WorkGridItem 
            id="adacraft" 
            title="Contributing to adacraft" 
            thumbnail={thumbAdacraft}
          >
          </WorkGridItem>
        </Section>

        <Section delay={0.2}>
          <WorkGridItem 
            id="cyberandcompliance" 
            title="Cyber & Compliance" 
            thumbnail={thumbCyberNCompliance}
          >
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.3}>
        <Divider my={4} />
      </Section>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'