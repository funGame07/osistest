import React, { useEffect, useState, useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Box, Image, Text, Link, Flex } from '@chakra-ui/react';
import { Box, VStack, Image, Text, Button, Link, Flex } from '@chakra-ui/react';

import { osis } from '../../App';
import "./carousel.scss"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { BsInstagram } from "react-icons/bs";

function Carousel() {
    const {osisUser, themes, colorMode} = useContext(osis)

  return (
    <Box className="container" maxW={{base:"100%", lg:"80%"}} px={"0%"} h={{base: "470px", lg:"450px"}}>
      <Swiper
        style={{display:"flex", padding: "60px 0px"}}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        lazyPreloadPrevNext={true}
        coverflowEffect={{
          rotate: 0,
          stretch: -5,
          depth: 160,
          modifier: 3,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        >
            {
                osisUser.map((data, id) =>{
                    return <SwiperSlide className="swipercardsss" key={id} >
                                <Content 
                                    mode={"wizard"} 
                                    img={"osis2.png"} 
                                    colorMode={colorMode} 
                                    // name={data.name} 
                                    // role={data.role} 
                                    // division={data.division} 
                                    // username={data.social[1]}
                                    // link={data.social[0]}
                                />
                            </SwiperSlide>
                })
            }
      </Swiper>
    </Box>
  );
}



function Content({img, mode, colorMode, name="Unknown", role="Unknown", division="Unknown", username="Unknown", link="https://www.instagram.com/"}){
    return (
        <Box
      width={{base: "260px", lg: "240px"}}
      height={{base: "410px",lg:"384px"}}
      bg={colorMode == "light" ? "gray.100" : "gray.800"}
      borderRadius="xl"
      overflow="hidden"
      boxShadow='0 0 20px rgba(66, 153, 225, 0.3)'
      transition="all 0.3s"
      _hover={{ boxShadow: '0 0 20px rgba(66, 153, 225, 0.7)' }}
    >
      <Box position="relative" height="66%">
        <Image src="JEEVAN.png" alt="Profile" objectFit="cover" w="100%" h="100%" />
        <Box
          position="absolute"
          inset="0"
          bgGradient="linear(to-t, gray.900, rgba(26, 32, 44, 0.7),rgba(26, 32, 44, 0.5), transparent, transparent)"
        />
        <VStack
          position="absolute"
          bottom="0"
          left="0"
          right="0"
          p="4"
          align="flex-start"
          spacing="1"
        >
          <Text color="gray.100" fontSize="xl" fontWeight="bold">
            Unknown
          </Text>
          <Text color="gray.400" fontSize="sm">
            OSIS Member
          </Text>
        </VStack>
      </Box>
      <VStack p="4" height="34%" justifyContent="space-between" bg="gray.900">
        <Text color="gray.400" fontSize="xs" w="100%">
          Active participant in school organizations
        </Text>
        <Flex justifyContent="space-between" w="100%" alignItems="center">
          <Button
            size="xs"
            colorScheme='blue'
            variant={"outline"}
            borderRadius="full"
            fontSize={"9px"}
            px={3}
          >
            UNKNOWN
          </Button>
          <Link
            href="https://instagram.com/"
            isExternal
            display="flex"
            alignItems="center"
            color="pink.400"
            _hover={{ color: 'pink.300' }}
            fontSize="xs"
            fontWeight="semibold"
          >
            <Box as={BsInstagram} size={16} mr="1" />
            @Unknown
          </Link>
        </Flex>
      </VStack>
    </Box>
    )
}

export default Carousel;

