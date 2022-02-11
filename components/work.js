import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Title = ({ children }) => (
  <Box mt={5}>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>

    <span>
      &nbsp;
      <ChevronRightIcon/>
      &nbsp;
    </span>

    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({src, alt}) => (
  <Image boxShadow="base" borderRadius="lg" w="full" src={src} alt={alt} mb={3}/>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)