import { Flex, Link as ChakraLink, Box, Heading, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logoImage from '/src/peelimages/logo.png';

const NavBar = () => {
  return (
    <Box bg='blue.200' w='100%' p={4} color='white'>
      <Flex alignItems="center" justifyContent="space-between">
        <Heading size={{base: "md", lg: "lg" }}>Peel Ski Club</Heading>

        <Image h={{base: '60px'}} src={logoImage} alignSelf="center" />

        <Box>
          <ChakraLink as={RouterLink} to="/" pr={4}>Home</ChakraLink>
          <ChakraLink as={RouterLink} to="/Action">Peel in Action</ChakraLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default NavBar;
