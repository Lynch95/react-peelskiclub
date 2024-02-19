import { VStack, Heading, AspectRatio, Box } from "@chakra-ui/react";

const VideoSection = () => {
  const videoIds = ['Kf53tBbA00A', 'dT9Xip4xRQ0'];

  return (
    <VStack spacing={{ base: 8, lg: 16 }} align="stretch">
      <Heading textAlign="center" size={{ base: 'x', lg: 'xl' }} my={8}>
        Videos
      </Heading>
      <VStack spacing={4}>
        {videoIds.map((videoId) => (
          <Box key={videoId} w="full" shadow="md" rounded="lg" overflow="hidden">
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
    </VStack>
  )
}

export default VideoSection;
