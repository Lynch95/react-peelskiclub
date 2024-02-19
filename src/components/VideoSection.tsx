import { HStack, Heading, AspectRatio, Box } from "@chakra-ui/react";

const VideoSection = () => {

  const videoIds = ['Kf53tBbA00A', 'dT9Xip4xRQ0',];

  return (
    <>
      <HStack justify='center' my={6}>
        <Heading size={{base: 'x', lg: 'xl'}}>Videos</Heading>
      </HStack>
      <HStack justify="center" spacing={4} wrap="wrap">
        {videoIds.map((videoId) => (
          <Box key={videoId} p={2} w={{ base: '100%', md: '48%', lg: '31.33%' }}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                title="YouTube video"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              />
            </AspectRatio>
          </Box>
        ))}
      </HStack>
    </>
  )
}

export default VideoSection;
