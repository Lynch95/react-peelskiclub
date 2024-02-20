import { Divider, Heading, VStack } from "@chakra-ui/react";
import Slideshow from "../components/Slideshow";
import VideoSection from "../components/VideoSection";

const Action = () => {
  const images = Array.from(
    { length: 50 },
    (_, i) => `/peelimages/${i + 1}.jpg`
  );

  const images2010 = Array.from(
    { length: 176 },
    (_, i) => `/peelimages/2010/${i + 1}.jpg`
  );

  return (
<>

<VStack mt={{base: '8', lg: '16'}} mb={{base: '8', lg: '16'}} color='blue.600' >
<Heading >Slideshow</Heading>
</VStack>

    <VStack spacing={{ base: 8, lg: 16 }} align="stretch" py={{ base: 8, lg: 16 }} color='blue.600'>
      <Slideshow images={images} heading="2023 Trip" />
      <Divider my={{ base: 8, lg: 16 }} borderColor="gray.200" />
      <Slideshow images={images2010} heading="2010 Trip" />
      <Divider my={{ base: 8, lg: 16 }} borderColor="gray.200" />
      <VideoSection />
    </VStack>
    </>
  );
};

export default Action;
