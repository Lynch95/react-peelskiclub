
import { Box, Link as ChakraLink, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (

    <Box bg='blue.200' w='100%' p={4} color='white'>
      <HStack spacing={{ base: 2, lg: 4}} as="nav" justify='center' >
        <ChakraLink as={RouterLink} to="/">Home</ChakraLink>
        <ChakraLink as={RouterLink} to="/Action">Peel in Action</ChakraLink>
        
      </HStack>
    </Box>
  );
}

export default NavBar;
