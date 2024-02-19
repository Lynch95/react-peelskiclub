import { Box, HStack, Link, Icon, Text, VStack, } from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { FiPhoneCall, FiMail } from "react-icons/fi";

interface Props {
  footText: string;
}

const Footer = ({ footText }: Props) => {
  const facebookUrl = "https://www.facebook.com/groups/181808221935337";
  const mailtoUrl = "mailto:peelskiclub@gmail.com";
  const telUrl = "tel:+07726711773";

  return (
    <Box bg="blue.200" w="100%" p={4} color="white">
   
     
      <VStack spacing={4} justify="center">
       
        <Text fontWeight="bold">{footText}</Text>
        <HStack spacing={4}>
         
          <Link href={mailtoUrl} isExternal>
            <Icon as={FiMail} w={6} h={6} />
          </Link>
          
          <Link href={telUrl} isExternal>
            <Icon as={FiPhoneCall} w={6} h={6} />
          </Link>
          
          <Link href={facebookUrl} isExternal>
            <Icon as={FaFacebook} w={6} h={6} />
          </Link>
        </HStack>
        <Text>Visit the group on Facebook</Text>
        
      </VStack>
    </Box>
  );
};

export default Footer;
