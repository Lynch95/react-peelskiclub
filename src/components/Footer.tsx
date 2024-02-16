
import { Box, HStack, Link, Icon, Text } from '@chakra-ui/react';
import { FaFacebook } from 'react-icons/fa'; // Importing Facebook icon

interface Props {
    footText: string
}

const Footer = ({footText}: Props) => {
 
    const facebookUrl = "https://www.facebook.com/groups/181808221935337";
    
    return (
    <Box bg='blue.200' w='100%' p={2} color='white' >
    <HStack spacing={4} justify='center'>
        <Text fontWeight='bold'>{footText}</Text>
    <Link href={facebookUrl} isExternal>
    <Icon as={FaFacebook} bg='blue' w={6} h={6} />
    </Link>
    </HStack>
    </Box>
    );
    };
    
    export default Footer;