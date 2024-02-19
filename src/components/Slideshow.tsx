import React, { useState } from 'react';
import { Box, Image, IconButton, useBreakpointValue, Center, Heading, HStack } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface Props {
  images: string[];
  heading: string
}

const Slideshow = ({ images, heading }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  // This will determine how the image fits within its container
  const objectFitValue: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down' = useBreakpointValue({
    base: 'cover',
    xl: 'contain',
  }) || 'cover';

  return (
    <>
      <HStack justify='center' mt={4} mb={4}>
        <Heading size={{ base: 'x', lg: 'xl' }}>{heading}</Heading>
      </HStack>
      <Center
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
          boxSize="full"
          objectFit={objectFitValue}
        />
        <IconButton
          aria-label="Previous image"
          icon={<ChevronLeftIcon />}
          onClick={prevImage}
          position="absolute"
          left={2}
          top="50%"
          transform="translateY(-50%)"
          bg="blue.200"
          _hover={{ bg: 'blue.300' }}
          borderRadius="full"
          size="lg"
          zIndex="2"
        />
        <IconButton
          aria-label="Next image"
          icon={<ChevronRightIcon />}
          onClick={nextImage}
          position="absolute"
          right={2}
          top="50%"
          transform="translateY(-50%)"
          bg="blue.200"
          _hover={{ bg: 'blue.300' }}
          borderRadius="full"
          size="lg"
          zIndex="2"
        />
      </Center>
    </>
  );
};

export default Slideshow;
