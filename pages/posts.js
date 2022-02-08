import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'


import WebsiteOpening from '../public/images/contents/test.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={26} mb={4} mt={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
      <SimpleGrid columns={[1,2,2]} gap={6}>
        <PostGridItem 
          id="testpost" 
          title="Sano Draw" 
          thumbnail={WebsiteOpening}
        >
          A portfolio for the artist and content creator Sano Draw. Stack : Strapi, React
        </PostGridItem>
      </SimpleGrid>  

      </Section>

    </Container>
  </Layout>

)

export default Posts
export { getServerSideProps } from '../components/chakra'