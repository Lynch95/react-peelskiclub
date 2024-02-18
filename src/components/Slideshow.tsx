import React, { useState } from 'react';
import { Box, Image, IconButton, useBreakpointValue, Center, Heading, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const Slideshow = () => {
    const imageNumbers = Array.from({ length: 50 }, (_, i) => i + 1);
    const images = imageNumbers.map((num) => `/src/peelimages/${num}.jpg`);
  
    const [currentImage, setCurrentImage] = useState(0);
  
    const nextImage = () => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    };
  
    // This value will determine how the image fits within its container
    const objectFitValue: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = useBreakpointValue({
      base: 'cover',
      xl: 'contain',
    }) || 'cover';
  
    return (
  <>
  
  <HStack justify='center'>
  <Heading size={{base: 'x', lg: 'xl'}}>Peel Ski Club 2023 Slideshow</Heading>
  </HStack>
  
      <Center
        mt={{ base: 0, lg: 4 }}
        w={{ base: "100vw", lg: "80vw" }}
        h={{ base: "50vh", lg: "80vh" }}
        maxW="1920px"
        position="relative"
        mx="auto"
        overflow="hidden"
      >
        <Image
          src={images[currentImage]}
          alt={`Slide ${currentImage + 1}`}
          maxW="full"
          maxH="full"
          objectFit={objectFitValue}
        />
  
        <IconButton
          aria-label="Previous image"
          icon={<ChevronLeftIcon />}
          onClick={prevImage}
          position="absolute"
          left="10px"
          top="50%"
          transform="translateY(-50%)"
          bg="whiteAlpha.600"
          _hover={{ bg: 'whiteAlpha.800' }}
          borderRadius="full"
          size="lg"
          zIndex="2"
        />
  
        <IconButton
          aria-label="Next image"
          icon={<ChevronRightIcon />}
          onClick={nextImage}
          position="absolute"
          right="10px"
          top="50%"
          transform="translateY(-50%)"
          bg="whiteAlpha.600"
          _hover={{ bg: 'whiteAlpha.800' }}
          borderRadius="full"
          size="lg"
          zIndex="2"
        />
      </Center>
      </>
    );
  };
  

export default Slideshow