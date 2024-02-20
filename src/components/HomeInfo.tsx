import { Box, HStack, Heading, Text } from "@chakra-ui/react";

const HomeInfo = () => {
  return (
    <HStack justify="center" spacing={8}>
      <Box
        borderRadius="lg"
        bg="blue.50"
        w={{ base: "90vw", lg: "50vw" }}
        mt="4"
        p={4}
        boxShadow="xl"
      >
        <Text mx={4} mt={2} mb={2}>
          <Heading as="h3" size="lg" mb={4} color="blue.600">
            Peel Ski Club Holiday 2025
          </Heading>

          <Text mb={2} fontWeight='bold'>Andy Baddock - Club Secretary and Holiday Organiser</Text>
          <Text mb={4}>
            <Text mb={2} fontWeight='bold'>peelskiclub@gmail.com </Text>
            <Text mb={4} fontWeight='bold'>07726711773</Text>
            'As we look forward to our next adventure, I am excited to share the
            details of the Peel Ski Club's upcoming holiday to Austria. Please
            mark these dates in your 2025 diary:
          </Text>

          <Box mb={4}>
            <Text>
              <Box as="span" fontWeight="bold" color="blue.600">
                Holiday Dates:
              </Box>{" "}
              Saturday, 11th January 2025 to Saturday, 18th January 2025
            </Text>
          </Box>

          <Text mb={4}>
            For those volunteering to be part of the road convoy, please note
            the following schedule:
          </Text>

          <Box mb={4}>
            <Text>
              <Box as="span" fontWeight="bold" color="blue.600">
                Departure:
              </Box>{" "}
              Afternoon of Thursday, 9th January 2025
            </Text>
            <Text>
              <Box as="span" fontWeight="bold" color="blue.600">
                Return:
              </Box>{" "}
              Morning of Sunday, 19th January 2025
            </Text>
          </Box>

          <Text>
            Looking forward to another memorable trip with all of you!'
          </Text>
        </Text>
      </Box>
    </HStack>
  );
};

export default HomeInfo;
