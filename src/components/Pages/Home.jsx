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
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} px={{base: 0, md: 10, lg: "6%"}} pos={"relative"} overflow={"hidden"}>
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

      <Flex flexDir={{base: "column", lg:"row"}} w={"100%"} gap={{base: 0, lg: 10}} mt={{base: 10, lg: "5em"}} justifyContent={"space-between"} pb={10} h={"fit-content"}>
        <Flex w={{base:"90%", lg:"60%"}}  placeSelf={"start"} roundedRight={{base:"80%", lg:"full"}} px={5} flexDir={"column"} pb={{base: 20, lg: 3}}
          border={"1px solid rgba(66, 153, 225, 0.5)"} borderStart={"none"} boxShadow={"0 0 20px rgba(66, 153, 225, 0.2)"} justifyContent={"center"}>
            <Heading lineHeight={"90px"}>VISI</Heading>
            <Text w={{base: "70%", lg:"80%"}} fontSize={{lg: "lg"}}>
              Menjadikan OSIS SMA Swasta Sultan Agung sebagai wadah yang menampung seluruh aspirasi dan kreatif bagi siswa 
              yang berintegritas, religius, berkarakter, inovatif, dan berprestasi. Kami berkomitmen untuk memberikan dampak 
              positif di lingkungan sekolah dan masyarakat, dan juga mendorong kesadaran sosial dan tanggung jawab lingkungan sekitar.
            </Text>

            <Heading lineHeight={"90px"}>MISI</Heading>
            <UnorderedList fontSize={{lg: "lg"}}>
              <ListItem w={{base: "75%", lg:"80%"}}>Menyelenggarakan berbagai kegiatan guna meningkatkan dan mengembangkan bakat, minat dan keterampilan prestasi siswa dari segi akademik maupun non akademik.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Meneruskan dan Mengembangkan program kerja OSIS dan membangun lingkungan sekolah yang sehat dan bersih.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Menyelenggarakan festival seni dan budaya, termasuk pameran karya siswa dan pentas seni.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Memperkuat solidaritas dan kebersamaan antar siswa dengan menyelenggarakan acara peringatan hari besar nasional yang melibatkan partisipasi seluruh siswa.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Mendukung kegiatan sosial dan kemanusiaan, mengorganisir kegiatan amal seperti bakti sosial.</ListItem>
              <ListItem w={{base: "75%", lg:"80%"}}>Berkomitmen untuk menjalin kerjasama yang baik dengan berbagai pihak, baik antar sekolah maupun dengan pihak luar, guna meningkatkan prestasi sesuai dengan perkembangan teknologi.</ListItem>

            </UnorderedList>
          </Flex>

        <Box w={{base:0, lg: "40%"}} display={{base: "none", lg:"block"}} h={"780px"} rounded={"3xl"} p={4}
        boxShadow={"0 0 20px rgba(66, 153, 225, 0.1)"} border={"1px solid rgba(66, 153, 225, 0.1)"}>
          fsfef
        </Box>
      </Flex>


      <Flex w={{base: "full", lg: "100%"}} flexDir={"column"} textAlign={"start"} px={5} bg={colorMode == "light" ? "white" : "black"} mt={10} py={5} pb={"5em"} gap={4}>        
        <Flex flexDir={"column"} gap={1}>
          <Text className="font-link" fontSize={"lg"} fontWeight={"800"}>HUBUNGI KAMI</Text>
          <Link style={{display: "flex", alignItems: "center", gap:"1em"}}>
            <Box as={IoMailOutline} size={"21px"} color={colorMode == "dark"? "blue.600": "blue.700"}/>
            sultanosis09090@gmail.com
          </Link>
        </Flex>
        <Flex flexDir={"column"} gap={2}>
          <Text className="font-link" fontSize={"lg"} fontWeight={"800"}>IKUTI KAMI</Text>
          <Link to={"https://www.instagram.com/smassa24.25/"} style={{display: "flex", alignItems: "center", gap:"1em"}}>
            <Box as={BsInstagram} size={"20px"} color={colorMode == "dark"? "blue.600": "blue.700"}/>
            @smassa24.25
          </Link>
          <Link to={"https://www.instagram.com/smassultanagung.psa/"} style={{display: "flex", alignItems: "center", gap:"1em"}}>
            <Box as={BsInstagram} size={"20px"} color={colorMode == "dark"? "blue.600": "blue.700"}/>
            @smassultanagung.psa
          </Link>
        </Flex>

        <Flex h={"60px"} animation={`${dissapear} 10s ease-in infinite`} alignItems={"center"} mt={3} gap={4} 
        placeSelf={"center"} justifySelf={"self-end"} opacity={0.5}>
          <Image src="sultan.png" maxW={"30px"} maxH={"30px"} rounded={"full"}/>
          <FaExchangeAlt size={20}/>
          <Image src="logoosis.png" maxW={"40px"} maxH={"40px"}/>
        </Flex>
      </Flex>
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