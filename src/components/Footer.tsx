import { Box, VStack, HStack, Link, Icon, Text } from "@chakra-ui/react";
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
      <VStack spacing={4} align="center">
        <Text fontWeight="bold" fontSize="lg">
          {footText}
        </Text>
        <Text>Andrew Baddock - Club Secretary and Holiday Organiser</Text>
        <Text>Email: peelskiclub@gmail.com</Text>
        <Text>Mobile: 07726711773</Text>

        <HStack spacing={4}>
          <Link href={mailtoUrl} isExternal>
            <Icon as={FiMail} w={6} h={6} _hover={{ color: "blue.300" }} />
          </Link>
          <Link href={telUrl} isExternal>
            <Icon as={FiPhoneCall} w={6} h={6} _hover={{ color: "blue.300" }} />
          </Link>
          <Link href={facebookUrl} isExternal>
            <Icon as={FaFacebook} w={6} h={6} _hover={{ color: "blue.300" }} />
          </Link>
        </HStack>

        <Text fontSize="sm">Visit the group on Facebook</Text>
      </VStack>
    </Box>
  );
};

export default Footer;
