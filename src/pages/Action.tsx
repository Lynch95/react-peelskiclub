import React from "react";
import { Box, Divider, VStack } from "@chakra-ui/react";
import Slideshow from "../components/Slideshow";
import VideoSection from "../components/VideoSection";

const Action = () => {

  const images = Array.from(
    { length: 50 },
    (_, i) => `/src/peelimages/${i + 1}.jpg`
  );

  const images2010 = Array.from(
    { length: 176 }, 
    (_, i) => `/src/peelimages/2010/${i + 1}.jpg`
  );

  return (
    <VStack spacing={{ base: 4, lg: 8}} align="stretch">
      <Slideshow images={images} heading="Slideshow - 2023 Trip" />
     
      <Divider my={{ base: 4, lg: 8}} borderColor="black" />
      <Slideshow images={images2010} heading="2010 Trip" />
      <Divider my={{ base: 4, lg: 8}} borderColor="black" />
      <VideoSection />
    </VStack>
  );
};

export default Action;
