import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const History = () => {
  const [isExpanded, setIsExpanded] = useState(false); 

  const toggleExpansion = () => setIsExpanded(!isExpanded); 

  return (
    <Box bg="blue.50" p={{ base: 4, md: 8 }} mt={8}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg" color="blue.600">
          Peel Ski Club History
        </Heading>

        <Text>
        The Peel Ski Club was established against the backdrop of the conflict in Northern Ireland. It was formed by officers from the Metropolitan Police Service with the aim of providing holidays for members of the Royal Ulster Constabulary who had sustained injuries while on duty.
        </Text>


{!isExpanded && (
          <Button onClick={toggleExpansion} colorScheme="blue">
            Read More
          </Button>
        )}

       
       
        {isExpanded && (
          <>

<Text>
The first trip took place in 1998 to the ski resort in Spital am Semmering in Austria. Adaptive skiing enabled even the most severely injured officers to participate in this life-enhancing sport.
        </Text>

            <Text>
            Each adaptive skier has two or three buddies that ski with them throughout the week and care for them as needed. The trip was very successful and as a result, has become a regular event every two years.
            </Text>

            <Text>
            The peace process in Northern Ireland has meant fewer officers were being injured in service, and so the club has diversified, taking non-police personnel who were disabled due to injury or illness.
            
            </Text>

           
          </>
        )}
      </VStack>
    </Box>
  );
};

export default History;