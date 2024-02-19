import { Box, HStack, Heading, Text } from "@chakra-ui/react";


const HomeInfo = () => {
  return (
    <HStack justify="center" spacing={8}>
      <Box
        borderRadius="lg"
        bg="blue.200"
        w={{ base: "90vw", lg: "50vw" }}
        mt="4"
        p={4}
        boxShadow="xl"
      >
        <Text mx={4} mt={2} mb={2}>
          <Heading as="h3" size="lg" mb={4}>
            Peel Ski Club Holiday 2025
          </Heading>

          <Text mb={2}>
            <strong>From:</strong> Andy Baddock
          </Text>
          <Text mb={4}>Dear all,</Text>
          <Text mb={4}>
            As we look forward to our next adventure, I am excited to share the
            details of the Peel Ski Club's upcoming holiday to Austria. Please
            mark these dates in your 2025 diary:
          </Text>

          <Box mb={4}>
            <Text>
              <strong>Holiday Dates:</strong> Saturday, 11th January 2025 to
              Saturday, 18th January 2025
            </Text>
          </Box>

          <Text mb={4}>
            For those volunteering to be part of the road convoy, please note
            the following schedule:
          </Text>

          <Box mb={4}>
            <Text>
              <strong>Departure:</strong> Afternoon of Thursday, 9th January
              2025
            </Text>
            <Text>
              <strong>Return:</strong> Morning of Sunday, 19th January 2025
            </Text>
          </Box>

          <Text>
            Looking forward to another memorable trip with all of you!
          </Text>
        </Text>
      </Box>
    </HStack>
  );
};

export default HomeInfo;
