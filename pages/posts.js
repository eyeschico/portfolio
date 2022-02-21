import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'


import WebsiteOpening from '../public/images/contents/nextchakramotion.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={26} mb={4} mt={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
      <SimpleGrid columns={[1,2,2]} gap={6}>
        <PostGridItem 
          id="portfolionextchakra" 
          title="How to create a Portfolio using Next.JS, Chakra UI and Framer Motion" 
          thumbnail={WebsiteOpening}
        />
      </SimpleGrid>  
  
      </Section>

    </Container>
  </Layout>

)

export default Posts
export { getServerSideProps } from '../components/chakra'