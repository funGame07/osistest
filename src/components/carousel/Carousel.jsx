// ### Import package from node_modules
import React, { useEffect, useState, useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

// ### Import icons from node_modules
import { BsInstagram } from "react-icons/bs";

// ### Import package from chakra ui
import { 
  Box, 
  VStack, 
  Image, 
  Text, 
  Button, 
  Link, 
  Flex, 
  Heading, 
  AspectRatio, 
  AbsoluteCenter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
 } from '@chakra-ui/react';

// ### Import styles carousel
import "./carousel.scss"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// ### Import library from libs
import { handleOutsideClick } from '../../../lib/libs';

// import context osis from App.jsx
import { osis } from '../../App';

// ### Template Carousel
function Carousel() {
  // ## Declaration hooks
  const {osisUser, colorMode} = useContext(osis) // context from osis
  const [showStructureOrg, setShowStructureOrg] = useState(false) // toogle the image 
  const structureOrg = useRef(null) // use reference for structureorg image
  const [normal, setNormal] = useState(true)

  // ## component mount once : structure organization image
  useEffect(()=>{
    document.addEventListener("mousedown", (e)=> handleOutsideClick(e, structureOrg, setShowStructureOrg), true) 
    return () => document.removeEventListener("mousedown", handleOutsideClick, true)
  }, [structureOrg])

  return (
    <Box className="container" pos={"relative"} mt={20} display={"flex"} flexDir={{base:"column", lg: "row"}} 
    maxW={{base:"100%", lg:"100%"}} h={"fit-content"} gap={{base:5, lg:2}}>
      <Flex w={{base: "100%", lg: "60%"}} flexDir={"column"} alignItems={"center"} gap={{base:4, lg: 2}} pos={"relative"}>
        {normal && 
        <>
          <Heading fontSize={"2xl"} textAlign={"center"} className='font-link'>
            STRUKTUR ORGANISASI
          </Heading> 
          <AspectRatio ratio={2/1.15} w={"95%"} placeSelf={"center"} rounded={"2xl"} boxShadow='0 0 20px rgba(66, 153, 225, 0.3)' overflowX={"auto"}>
            <Image src='structureorg.webp' objectFit={"initial"} rounded={"2xl"} filter={"auto"} brightness={0.9} _hover={{brightness: "0.7"}}  onClick={()=> setShowStructureOrg(true)}/>        
          </AspectRatio>
        </>}

        {!normal && <Accordion defaultIndex={[0]} h={"390px"} display={"flex"} flexDir={"column"} gap={1} w={"95%"}>
          <AccordionItem >
            <h2>
              <AccordionButton as={Button} bgColor={"red.600"} colorScheme='red' color={"white"}>
                <Heading fontSize={"2xl"} textAlign={"center"} className='font-link'>
                  STRUKTUR ORGANISASI
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} h={"230px"}>
            <AspectRatio ratio={2/1.15} w={"95%"} placeSelf={"center"} rounded={"2xl"} boxShadow='0 0 20px rgba(66, 153, 225, 0.3)' overflowX={"auto"}>
              <Image src='structureorg.webp' objectFit={"initial"} rounded={"2xl"} filter={"auto"} brightness={0.9} _hover={{brightness: "0.7"}}  onClick={()=> setShowStructureOrg(true)}/>        
            </AspectRatio>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton as={Button} bgColor={"red.700"} colorScheme='red' color={"white"}>
                  <Heading fontSize={"2xl"} textAlign={"center"} className='font-link'>
                    STRUKTUR ORGANISASI
                  </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} h={"230px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton as={Button} bgColor={"red.800"} colorScheme='red' color={"white"}>
                  <Heading fontSize={"2xl"} textAlign={"center"} className='font-link'>
                    DOKUMENTASI LOMBA
                  </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} h={"230px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton as={Button} bgColor={"red.900"} colorScheme='red' color={"white"}>
                  <Heading fontSize={"2xl"} textAlign={"center"} className='font-link'>
                    DOKUMENTASI LOMBA
                  </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} h={"230px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>}
      </Flex>

      <AbsoluteCenter pos={"absolute"} top={"50%"} w={"85%"} m={'auto'} rounded={"2xl"} overflow={"hidden"} ref={structureOrg} zIndex={999} display={{base: "none", lg: showStructureOrg? "block" : "none"}}>
          <Image src='structureorg.webp' objectFit={"cover"} w={"full"} h={"full"} filter={"auto"} brightness={0.9} border={"1px solid black"}/>
      </AbsoluteCenter>

      <Swiper
        // style={{background: colorMode == "light" ? "#EAEAEA" :"gray.900"}}
        className='swiper-container'
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
                                    colorMode={colorMode} 
                                    img={data.name}
                                    name={data.name} 
                                    role={data.role} 
                                    division={data.division} 
                                    username={data.username_ig}
                                    link={data.link_ig}
                                    description={data.description}
                                />
                            </SwiperSlide>
                })
            }
      </Swiper>
    </Box>
  );
}



function Content({img="quizbg2.webp", division, colorMode, name="Unknown", role="Unknown", description, username="Unknown", link="https://www.instagram.com/"}){
    return (
        <Box
      width={{base: "230px", lg: "240px"}}
      height={{base: "410px",lg:"384px"}}
      bg={colorMode == "light" ? "gray.200" : "gray.800"}
      borderRadius="xl"
      overflow="hidden"
      boxShadow='0 0 20px rgba(66, 153, 225, 0.5)'
      transition="all 0.3s"
      _hover={{ boxShadow: '0 0 20px rgba(66, 153, 225, 0.7)' }}
    >
      <Box position="relative" height="66%">
        <Image src={img.split(" ")[0].toLowerCase() + ".webp"} alt="Profile" objectFit="cover" w="100%" h="100%" />
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
          <Text color="gray.100" fontSize="lg" fontWeight="bold">
            {name.split(" ").map(word => word.charAt(0) + word.slice(1).toLowerCase()).join(" ")}
          </Text>
          {/* <Text color="gray.400" fontSize="xs">
            {division}
          </Text> */}
        </VStack>
      </Box>
      <VStack p="4" height="34%" justifyContent="space-between" bg="gray.900">
        <Text color="gray.400" fontSize="xs" w="100%">
          {description == "" ? "Active participant in school organizations" : description}
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
            {role}
          </Button>
          <Link
            href={link}
            isExternal
            display="flex"
            alignItems="center"
            color="pink.400"
            _hover={{ color: 'pink.300' }}
            fontSize="xs"
            fontWeight="semibold"
          >
            <Box as={BsInstagram} size={16} mr="1" />
            {username.includes("@") ? username : `@${username}`}
          </Link>
        </Flex>
      </VStack>
    </Box>
    )
}

export default Carousel;

