import { Box, HStack, Image, useBreakpointValue, Stack, StackDirection } from "@chakra-ui/react";
import homeImage1 from "/peelimages/bottom1.jpg";
import homeImage2 from "/peelimages/bottom2.jpg";
import coverImage from "/peelimages/coverphoto.jpg";
import HomeInfo from "../components/HomeInfo";
import History from "../components/History";

function Home() {
  const stackDirection: StackDirection | undefined = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <>
      <HStack justify="center">
        <Box mt={{ base: 2, lg: 4 }}>
          <Image src={coverImage} borderRadius="lg" boxShadow="lg" />
        </Box>
      </HStack>

      <HomeInfo />

      <Stack direction={stackDirection} spacing={4} align="center" justify="center" mt={4}>
        <Box boxShadow="xl" borderRadius="lg" overflow="hidden">
          <Image src={homeImage1} w="full" h={{base: '300px', lg:"500px"}} objectFit="cover" />
        </Box>
        <Box boxShadow="xl" borderRadius="lg" overflow="hidden">
          <Image src={homeImage2} w="full" h="500px" objectFit="cover" />
        </Box>
      </Stack>

      <History />
    </>
  );
}

export default Home