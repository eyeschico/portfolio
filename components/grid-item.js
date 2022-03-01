import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, useColorModeValue, Heading} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail}) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image 
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>

    </LinkBox>
  </Box>
)

export const WorkGridItem = ({ children, id, title, thumbnail}) => (
  <Box 
    w="100%" 
    className="grid-item-box" 
    align="center" 
    bg={useColorModeValue('#E4E0FF', '#18111A')}
  >
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image 
          src={thumbnail} 
          alt={title} 
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Box p={3} pb={5}>
            <Heading fontSize={20} mb={1}>{title}</Heading>
            <Text fontSize={12}>{children}</Text>
          </Box>
        </LinkOverlay>

      </LinkBox>
    </NextLink>
  </Box>
)

export const PostGridItem = ({ children, id, title, thumbnail}) => (
  <Box 
    w="100%" 
    className="grid-item-box" 
    align="center" 
    bg={useColorModeValue('#E4E0FF', '#18111A')}
  >
    <NextLink href={`/posts/${id}`}>
      <LinkBox cursor="pointer">
        <Image 
          src={thumbnail} 
          alt={title} 
          className="grid-item-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/posts/${id}`}>
        <Box p={3} pb={5}>
          <Heading fontSize={14} mb={1}>{title}</Heading>
          <Text fontSize={12}>{children}</Text>
        </Box>

        </LinkOverlay>
      </LinkBox>
    </NextLink>
  </Box>
)

export const GridItemStyle = () => (
  <Global styles={`
    .grid-item-thumbnail{
      border-radius: 12px 12px 0 0;

    }

    .grid-item-box{
      border-radius: 12px;
      transition: 0.1s;
    }

    .grid-item-box:hover{
      border: solid #ff63c3 1px;
    }

    .grid-item-text{
      padding: 10px;
    }
  `}/>
)