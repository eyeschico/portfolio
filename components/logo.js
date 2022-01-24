import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled/";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`
const Logo = () => {
  const eyesChicoImg = `/images/eyeschico${useColorModeValue('', '-dark')}.png`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <Image src={eyesChicoImg} width={60} height={30} alt="logo"/>
          <Text 
            color={useColorModeValue('gray.800', 'whiteAlpha.980')}
            fontFamily="M PLUS Rounded 1c, sans-serif"
            fontWeight="bold"
            ml={3}>
              Mohammed Khalef
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo