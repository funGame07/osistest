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
  PopoverCloseButton,
  UnorderedList,
  ListItem,
  Heading,
  AbsoluteCenter
 } from "@chakra-ui/react"
 import { Link } from "react-router-dom";
 import { FaExchangeAlt } from "react-icons/fa";
import Carousel from "../carousel/Carousel";
import { useContext } from "react";
import { osis } from "../../App";
import { IoIosArrowBack } from "react-icons/io";
import { IoMailOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

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
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} px={{base: 0, md: 10, lg: "6%"}} pos={"relative"}>
      <Image src="schoolbg.png" pos={"absolute"} w={"full"} objectFit={"cover"} h={"100vh"} filter={"auto"} brightness={"0.4"}/>
    
      <Flex pt={{base: "120px", lg: "0"}} minH={"100vh"} flexDir={{base: "column", lg: "row"}} color={"white"}
      alignItems={"center"} gap={{base: 3, lg:1}} pos={"relative"} minW={"full"}>
        <Box order={{base: 0, lg: 1}} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} h="230px" my={5} mx={"auto"} w={{base: "full" ,sm: "40%", lg: "50%"}} pos={"relative"}> 
          <Image src="sultanagung.png" rounded={"full"} maxW={{base: "230px", lg: "420px"}}transform={"rotate(13deg)"} pos={"absolute"} top={{base:"-2em", lg: "-6em"}} left={{base: "2em"}}/>
          <Image src="sultanagung2.png" rounded={"full"} maxW={{base: "230px", lg: "420px"}} transform={"rotate(-10deg)"} pos={"absolute"} top={{base: "5em", lg: "7em"}} right={{base: "1em"}} zIndex={10}/>
        </Box>
        
        <Flex flexDir={"column"} w={{base: "full", lg:"50%"}} alignItems={{base: "center", lg: "start"}}>
          <Text fontSize={{base: "xs", lg: "sm"}} fontWeight={"400"} opacity={0.8}>
            OSIS SMA #The best
          </Text>
          <Text className="font-link" w={"100%"} fontSize={{base: "2xl", lg: "6xl"}} fontWeight={"800"} textAlign={{base:"center", lg: "start"}} lineHeight={1}>
            OSIS SULTAN AGUNG
          </Text>
          <Text className="font-link" opacity={0.9} textAlign={{base:"center", lg:"start"}} maxW={{base: "55%", lg: "80%"}} fontSize={{base: "15px", lg: "sm"}} fontWeight={"600"}>
            Jelajahi dunia OSIS Sultan Agung! Temukan beragam fitur menarik dan aktifkan petualanganmu bersama kami.        
          </Text>
          <Text fontSize={{base: "sm", lg: "lg"}} fontWeight={"400"} opacity={0.8}>
          Selamat Mengeksplore
          </Text>
          <Link to={"/explore"} style={{width: "40%"}}>
            <Button className="font-link" color={"white"} mt={7} bgColor={"rgba(66, 153, 225, 0.4)"} variant={"outline"} colorScheme={"blue"} w={"full"} size={"md"} rounded={"full"}>
              Explore
            </Button>
          </Link>
        </Flex>
        
        
      </Flex>
      
      <Carousel />

      <Division text={""} colorMode={colorMode}/>

      <Flex flexDir={{base: "column", lg:"row"}} w={"100%"} gap={{base: 0, lg: 10}} mt={{base: 10, lg: "5em"}} justifyContent={"space-between"} pb={10}>
        <Flex w={{base:"90%", lg:"55%"}} h={"500px"} placeSelf={"start"} roundedRight={"full"} px={5} flexDir={"column"}pb={3}
          border={"1px solid rgba(66, 153, 225, 0.5)"} borderStart={"none"} boxShadow={"0 0 20px rgba(66, 153, 225, 0.2)"} justifyContent={"center"}>
            <Heading lineHeight={2}>VISI</Heading>
            <Text w={{base: "70%", lg:"80%"}} fontSize={{lg: "lg"}}>Menjadi pemimpin dalam inovasi teknologi yang berkelanjutan, menciptakan solusi yang berdampak positif bagi masyarakat dan lingkungan.</Text>

            <Heading lineHeight={2}>MISI</Heading>
            <UnorderedList fontSize={{lg: "lg"}}>
              <ListItem w={{base: "75%", lg:"80%"}}>menciptakan solusi yang berdampak positif bagi masyarakat dan lingkungan.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Menjadi pemimpin dalam inovasi teknologi yang berkelanjutan.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>menciptakan positif bagi masyarakat dan lingkungan.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Menjadi pemimpin dalam inovasi teknologi yang berkelanjutan.</ListItem>
            </UnorderedList>
          </Flex>

        <Box w={{base:0, lg: "40%"}} display={{base: "none", lg:"block"}} h={"500px"} rounded={"3xl"} p={4}
        boxShadow={"0 0 20px rgba(66, 153, 225, 0.1)"} border={"1px solid rgba(66, 153, 225, 0.1)"}>
          fsfef
        </Box>
      </Flex>

      {/* <Division text={""} colorMode={colorMode}/> */}

      <Flex w={"full"} flexDir={"column"} textAlign={"start"} px={5} bg={colorMode == "light" ? "white" : "black"} mt={10} py={5} pb={"5em"} gap={4}>        <Flex flexDir={"column"} gap={1}>
          <Text className="font-link" fontSize={"lg"} fontWeight={"800"}>HUBUNGI KAMI</Text>
          <Link style={{display: "flex", alignItems: "center", gap:"1em"}}>
            <Box as={IoMailOutline} size={"21px"} color={colorMode == "dark"? "blue.600": "blue.700"}/>
            sultanosis09090@gmail.com
          </Link>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text className="font-link" fontSize={"lg"} fontWeight={"800"}>IKUTI KAMI</Text>
          <Link style={{display: "flex", alignItems: "center", gap:"1em"}}>
            <Box as={BsInstagram} size={"20px"} color={colorMode == "dark"? "blue.600": "blue.700"}/>
            @smassa24.25
          </Link>
        </Flex>

        <Flex h={"60px"} animation={`${dissapear} 10s ease-in infinite`} alignItems={"center"} mt={3} gap={4} 
        placeSelf={"center"} justifySelf={"self-end"} opacity={0.5}>
          <Image src="sultan.png" maxW={"30px"} maxH={"30px"} rounded={"full"}/>
          <FaExchangeAlt size={20}/>
          <Image src="logoosis.png" maxW={"40px"} maxH={"40px"}/>
        </Flex>
      </Flex>
      






      {/* <Division text={"Lainnya"} colorMode={colorMode} pt={9}/> */}

          {/* others */}
      {/* <Flex gap={3} flexDir={{base: "column", lg: "row"}} minW={"full"}>
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
              filter={"brightness(0.7)"} cursor={"pointer"} 
              boxShadow={`2px 2px 1px 1px ${colorMode == "light"? "black" : "gray"}`}>
                <Text color={"white"} textShadow={"-2px -2px 20px black"}
                fontSize={"lg"} fontWeight={"800"} fontFamily={"sans-serif"}
                pos={"absolute"} w={"63%"} loading="lazy">
                  Visi dan Misi Kami
                </Text>
                <Text color={"white"} pos={"absolute"} bottom={3} fontWeight={600} letterSpacing={2}>Yuk disimak!</Text>
            </Box>
            </PopoverTrigger>
            <PopoverContent border={"1px solid teal"}>
              <PopoverHeader height={"55px"}>
                <PopoverCloseButton size={40} left={-200}>
                  <IoIosArrowBack size={"25px"} cursor={"pointer"}/>
                  <Image src={colorMode == "light" ? "logoosis-black.png" : "logoosis-white.png"} maxW={"20"}/>
                </PopoverCloseButton>
              </PopoverHeader>
              <PopoverBody>
                <Division text={"VISI"} colorMode={colorMode} pt={0} py={1}/>
                  <UnorderedList px={3}>
                    <ListItem>idjaiodnauiwdwdun</ListItem>
                    <ListItem>idjaiodnauiwdwdun</ListItem>
                    <ListItem>idjaiodnauiwdwdun</ListItem>
                  </UnorderedList>

                <Division text={"MISI"} colorMode={colorMode} pt={7} py={0}/>
                  <UnorderedList px={3}>
                    <ListItem>idjaiodnauiwdwdun</ListItem>
                    <ListItem>idjaiodnauiwdwdun</ListItem>
                  </UnorderedList>
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
              filter={"brightness(0.7)"} cursor={"pointer"} 
              boxShadow={`2px 2px 1px 1px ${colorMode == "light"? "black" : "gray"}`}>
                <Text color={"white"} textShadow={"-2px -2px 20px black"}
                fontSize={"lg"} fontWeight={"800"} fontFamily={"sans-serif"}
                pos={"absolute"} w={"63%"} loading="lazy">
                  Dokumentasi Lomba
                </Text>
                <Text color={"white"} pos={"absolute"} bottom={3} fontWeight={600} letterSpacing={2}>Yuk ditengok!</Text>
            </Box>
            </PopoverTrigger>
            <PopoverContent border={"1px solid teal"}>
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
      </Flex> */}
      

    </Box>
  )
}

function Division({text, colorMode, pt=7}){
  return (
    <Flex alignItems={"center"} pos={"relative"} minW={"full"} gap={4} px={4} py={3} pt={{base: pt, lg: "5em"}}>
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