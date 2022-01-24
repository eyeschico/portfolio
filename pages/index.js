import {Container, Box, Heading} from '@chakra-ui/react'

const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I'm a web and mobile developer based in France!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page=title">
            Mohammed Khalef
          </Heading>
          <p>Web Developer, 3D Artist</p>
        </Box>
      </Box>    
    </Container>

  )
}

export default Page