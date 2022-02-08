
import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSanodraw from '../public/images/works/sanodraw-screen.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={26} mb={4} mt={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem 
            id="sanodraw" 
            title="Sano Draw" 
            thumbnail={thumbSanodraw}
          >
            A portfolio for the artist and content creator Sano Draw. Stack : Strapi, React
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={4} />
      </Section>

    </Container>
  </Layout>
)

export default Works