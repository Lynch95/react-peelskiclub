import React, { useState } from 'react';
import { Box, Heading, Text, VStack, Button } from '@chakra-ui/react';

const History = () => {
  const [isExpanded, setIsExpanded] = useState(false); // State to manage content expansion

  const toggleExpansion = () => setIsExpanded(!isExpanded); // Function to toggle content expansion

  return (
    <Box bg="blue.50" p={{ base: 4, md: 8 }} mt={8}>
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg" color="blue.600">
          Peel Ski Club History
        </Heading>

        <Text>
        The Peel Ski Club was established against the backdrop of the conflict in Northern Ireland. It was formed by officers from the Metropolitan Police Service with the aim of providing recuperative holidays for members of the Royal Ulster Constabulary who had sustained injuries while on duty.
        </Text>

{/* Read More Button */}
{!isExpanded && (
          <Button onClick={toggleExpansion} colorScheme="blue">
            Read More
          </Button>
        )}

       
        {/* Expanded Content */}
        {isExpanded && (
          <>

<Text>
The club's inaugural trip was in 1998 to the Spital am Semmering ski resort in Austria. There, adaptive skiing programs enabled even those with severe injuries to engage in this enriching sport.
        </Text>

            <Text>
            Participants, referred to as "adaptive skiers," are accompanied by two or three volunteer "buddies" who assist and ski alongside them throughout the week. This inaugural trip was a tremendous success, leading to the event becoming a regular occurrence every two years.
            </Text>

            <Text>
            The advent of the peace process in Northern Ireland, which led to a reduction in service-related injuries among officers, prompted the club to broaden its membership. It now welcomes individuals with disabilities, whether from injury or illness, who are not affiliated with the police force.
            </Text>

            {/* Additional content continues here... */}
          </>
        )}
      </VStack>
    </Box>
  );
};

export default History;