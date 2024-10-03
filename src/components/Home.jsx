import { 
  Box,
  Text,
  Flex,
  Image,
  Circle,
  keyframes,
  StackDivider,
  Button,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton
 } from "@chakra-ui/react"
 import { Link } from "react-router-dom";
 import { FaExchangeAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import { useContext } from "react";
import { osis } from "../App";
import { IoIosArrowBack } from "react-icons/io";

import "./home.css"

function Home() {
  const {userOsis, colorMode} = useContext(osis)

  const dissapear = keyframes`
    0%{
      opacity: 0.1
    }
    50%{
      opacity: 0.9
    }
    100%{
      opacity: 0.1
    }
  `


  return(
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} px={{base: 0, md: 10, lg: "8%"}} pb={"70px"}>
    
      <Flex pt={"120px"} flexDir={{base: "column", lg: "row"}} alignItems={"center"} gap={{base: 3, lg:1}}>
        <Image src="logoosis.png" rounded={"full"} order={{base: 0, lg: 1}}
        maxW={{base: "250px", lg: "450px"}}/>
        <Flex flexDir={"column"} alignItems={"center"} >
          <Text className="font-link" w={"101%"} color={colorMode == "light" ? "": "#e2d000"} fontSize={{base: "2xl", lg: "6xl"}} fontWeight={"700"} textAlign={"center"}>
            OSIS SULTAN AGUNG
          </Text>
          <Text className="font-link" opacity={0.9} textAlign={"center"} maxW={{base: "55%", lg: "80%"}} fontSize={{base: "15px", lg: "3xl"}} fontWeight={"600"}>
            Jelajahi dunia OSIS Sultan Agung! Temukan beragam fitur menarik dan aktifkan petualanganmu bersama kami.        
          </Text>
          <Text fontSize={{base: "sm", lg: "lg"}} fontWeight={"400"} opacity={0.8}>
          Selamat Mengeksplore
          </Text>
          <Link to={"/explore"} style={{width: "60%"}}>
            <Button className="font-link" mt={7} bgColor={colorMode== "light"? "black" : "#e2d000"} colorScheme={colorMode== "light"? "whiteAlpha" : "yellow"} w={{base: "100%", lg: "100%"}}>
              Explore
            </Button>
          </Link>
        </Flex>
        
        
      </Flex>

      <Division text={"Anggota"} colorMode={colorMode} pt={9}/>
      
      <Carousel />

      <Division text={"Lainnya"} colorMode={colorMode} pt={9}/>

          {/* others */}
      <Flex gap={2} flexDir={{base: "column", lg: "row"}} minW={"full"}>
        <Flex width={"full"} px={5} gap={1}>
          <Circle bg={"teal"} size={"45px"}>
            <Circle border={`4px solid ${colorMode == "light" ? "white": "black"}`} size={"5em"}>
              <Circle border={`3px solid ${colorMode == "light" ? "white": "black"}`} size={"35px"}>
                <Text fontWeight={700} color={"white"} textAlign={"center"}>01</Text>
              </Circle>
            </Circle>
          </Circle>
          <Popover placement="top-end">
            <PopoverTrigger>
              <Box bg={"red"} flexGrow={1} minH={"110px"} maxH={"130px"} 
              rounded={"xl"} pos={"relative"} p={5} bgImage={"visi.png"}
              bgSize={"cover"} bgPos={"center"} bgRepeat={"no-repeat"}
              filter={"brightness(0.7)"} cursor={"pointer"}>
                <Text color={"white"} textShadow={"-2px -2px 20px black"}
                fontSize={"lg"} fontWeight={"800"} fontFamily={"sans-serif"}
                pos={"absolute"} w={"63%"} loading="lazy">
                  Visi dan Misi Kami
                </Text>
                <Text color={"white"} pos={"absolute"} bottom={3} fontWeight={600} letterSpacing={2}>Yuk disimak!</Text>
            </Box>
            </PopoverTrigger>
            <PopoverContent border={"2px solid teal"}>
              <PopoverHeader height={"55px"}>
                <PopoverCloseButton size={40} left={-200}>
                  <IoIosArrowBack size={"25px"} cursor={"pointer"}/>
                  <Image src={colorMode == "light" ? "logoosis-black.png" : "logoosis-white.png"} maxW={"20"}/>
                </PopoverCloseButton>
              </PopoverHeader>
              <PopoverBody>
                <Division text={"Visi"} colorMode={colorMode} pt={0} py={1}/>
                <Text className="font-link" fontSize={"sm"}>1. blablablablablablabalbl</Text>
                <Text className="font-link" fontSize={"sm"}>2. xixixixixixixixiixxixi</Text>
                <Text className="font-link" fontSize={"sm"}>3. blablablablablablabalbl</Text>
                <Text className="font-link" fontSize={"sm"}>4. xixixixixixixixiixxixi</Text>
                <Text className="font-link" fontSize={"sm"}>5. blablablablablablabalbl</Text>
                <Text className="font-link" fontSize={"sm"}>6. xixixixixixixixiixxixi</Text>

                <Division text={"Misi"} colorMode={colorMode} pt={7} py={0}/>
                <Text className="font-link" fontSize={"sm"}>1. blablablablablablabalbl</Text>
                <Text className="font-link" fontSize={"sm"}>2. xixixixixixixixiixxixi</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>

        <Flex width={"full"} px={5} gap={1}>
          <Circle bg={"teal"} size={"45px"}>
            <Circle border={`4px solid ${colorMode == "light" ? "white": "black"}`} size={"5em"}>
              <Circle border={`3px solid ${colorMode == "light" ? "white": "black"}`} size={"35px"}>
                <Text fontWeight={700} color={"white"} textAlign={"center"}>02</Text>
              </Circle>
            </Circle>
          </Circle>

          <Popover placement="top-end">
            <PopoverTrigger>
              <Box bg={"red"} flexGrow={1} minH={"110px"} maxH={"130px"} 
              rounded={"xl"} pos={"relative"} p={5} bgImage={"lomba.png"}
              bgSize={"cover"} bgPos={"center"} bgRepeat={"no-repeat"}
              filter={"brightness(0.7)"} cursor={"pointer"}>
                <Text color={"white"} textShadow={"-2px -2px 20px black"}
                fontSize={"lg"} fontWeight={"800"} fontFamily={"sans-serif"}
                pos={"absolute"} w={"63%"} loading="lazy">
                  Dokumentasi Lomba
                </Text>
                <Text color={"white"} pos={"absolute"} bottom={3} fontWeight={600} letterSpacing={2}>Yuk ditengok!</Text>
            </Box>
            </PopoverTrigger>
            <PopoverContent border={"2px solid teal"}>
              <PopoverHeader height={"55px"}>
                <PopoverCloseButton size={40} left={-200}>
                  <IoIosArrowBack size={"25px"} cursor={"pointer"}/>
                  <Image src={colorMode == "light" ? "logoosis-black.png" : "logoosis-white.png"} maxW={"20"}/>
                </PopoverCloseButton>
              </PopoverHeader>
              <PopoverBody>
                
                
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </Flex>
      
      <Flex h={"60px"} animation={`${dissapear} 6s ease-in infinite`} alignItems={"center"} mt={5} gap={4}>
        <Image src="sultan.png" maxW={"40px"} maxH={"40px"} rounded={"full"} loading="lazy"/>
        <FaExchangeAlt size={20}/>
        <Image src="logoosis.png" maxW={"50px"} maxH={"50px"} loading="lazy"/>
      </Flex>
      

    </Box>
  )
}

function Division({text, colorMode, pt, py=3}){
  return (
    <Flex alignItems={"center"} pos={"relative"} minW={"full"} gap={4} px={4} py={py} pt={pt}>
      <Box flexGrow={1} bg={colorMode == "light" ? "#241a0e" : "gray.100"}>
        <StackDivider borderColor='gray.200' width={"full"} minH={"2px"}/>
      </Box>
      <Text className="font-link" fontSize={{base: "lg", lg:"sm"}} fontWeight={700}>{text}</Text>
      <Box flexGrow={1} bg={colorMode == "light" ? "#241a0e" : "gray.100"}>
        <StackDivider borderColor='gray.200' width={"full"} minH={"2px"}/>
      </Box>
    </Flex>
  )
}

export default Home
