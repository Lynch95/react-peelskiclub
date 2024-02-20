import { VStack, Heading, AspectRatio, Box, Divider } from "@chakra-ui/react";

interface VideosByYear {
  [year: string]: string[];
}


const VideoSection = () => {
  const videosByYear: VideosByYear = {
    '2020': ['XOAh9491wNo', 'kJ-A0J3C3fs', 'Kf53tBbA00A', 'dknxooO2FNg'],
    '2016': ['A7_7p0iBWDY'],
    '2014': ['dT9Xip4xRQ0'],
  };

  
  const sortedYears = Object.keys(videosByYear).sort((a, b) => parseInt(b) - parseInt(a));

  return (
    <>
      <VStack spacing={{ base: 8, lg: 16 }} align="stretch">
        <Heading textAlign="center" size={{ base: 'xl', lg: '2xl' }} my={8} color="blue.600">
          Videos
        </Heading>
        {sortedYears.map((year, index) => (
          <Box key={year}>
            <Heading textAlign="center" size={{ base: 'xl', lg: 'xl' }} my={8} color="blue.500">
              {year}
            </Heading>
            <VStack spacing={4}>
              {videosByYear[year].map((videoId) => (
                <Box key={videoId} w="full" p={2} bg="white" rounded="lg" overflow="hidden" shadow="md" _hover={{ shadow: 'lg' }} transition="shadow 0.3s ease-in-out">
                  <AspectRatio ratio={16 / 9} maxW={{ base: 'full', md: '80%', lg: '60%' }} mx="auto">
                    <iframe
                      title={`YouTube video ${videoId}`}
                      src={`https://www.youtube.com/embed/${videoId}`}
                      allowFullScreen
                    />
                  </AspectRatio>
                </Box>
              ))}
            </VStack>
            {index < sortedYears.length - 1 && (
              <Divider my={{ base: 4, lg: 8 }} borderColor="gray.300" />
            )}
          </Box>
        ))}
      </VStack>
    </>
  );
};

export default VideoSection;

