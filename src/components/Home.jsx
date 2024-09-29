import { 
  Box,
  Text,
  Flex,
  Image,
  Circle,
  keyframes,
  StackDivider,
  Button,
  Link,
  Popover,
  PopoverTrigger,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverCloseButton
 } from "@chakra-ui/react"
 import { FaExchangeAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import { useContext } from "react";
import { osis } from "../App";
import { IoIosArrowBack } from "react-icons/io";

import "./home.css"

function Home() {
  const {colorMode} = useContext(osis)

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
    
      <Flex pt={"120px"} flexDir={"column"} alignItems={"center"} gap={3}>
        <Image src="logoosis.png" rounded={"full"} 
        maxW={{base: "250px", lg: "250px"}}/>
        <Text className="font-link" fontSize={{base: "2xl", lg: "3xl"}} fontWeight={"800"}>
          OSIS Sultan Agung
        </Text>
        <Text className="font-link" textAlign={"center"} maxW={"55%"} fontSize={{base: "15px", lg: "12px"}} fontWeight={"600"}>
          Jelajahi dunia OSIS Sultan Agung! Temukan beragam fitur menarik dan aktifkan petualanganmu bersama kami.        
        </Text>
        <Text fontSize={{base: "sm", lg: "10px"}} fontWeight={"500"}>
        Selamat Mengeksplore
        </Text>
        <Link to={"/explore"} w={"40%"} mt={5} display={"flex"} justifyContent={"center"}>
          <Button className="font-link" colorScheme="teal"  w={{base: "100%", lg: "80%"}} h={{base:"40px", lg: "40px"}}>
            Explore
          </Button>
        </Link>
        
      </Flex>

      <Division text={"Anggota"} colorMode={colorMode} pt={9}/>
      
      <Carousel />

      <Division text={"Lainnya"} colorMode={colorMode} pt={9}/>

          {/* others */}
      <Flex gap={4} flexDir={'column'} minW={"full"}>
        <Flex width={"full"} px={5} gap={5}>
          <Circle bg={"teal"} size={"50px"}>
            <Circle border={`4px solid ${colorMode == "light" ? "white": "black"}`} size={"40px"}>
              <Text fontWeight={700} color={"white"} textAlign={"center"}>01</Text>
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

        <Flex width={"full"} px={5} gap={5}>
          <Circle bg={"teal"} size={"50px"}>
            <Circle border={`4px solid ${colorMode == "light" ? "white": "black"}`} size={"40px"}>
              <Text fontWeight={700} textAlign={"center"} color={"white"}>02</Text>
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