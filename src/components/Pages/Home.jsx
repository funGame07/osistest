// ### Import package from chakra ui
import { 
  Box,
  Text,
  Flex,
  Image,
  keyframes,
  StackDivider,
  Button,
  UnorderedList,
  List,
  ListItem,
  Heading,
 } from "@chakra-ui/react"

// ### Import package from node_modules 
import { Link } from "react-router-dom";
import { FaExchangeAlt } from "react-icons/fa";
import Carousel from "../carousel/Carousel";
import { useContext } from "react";
import { osis } from "../../App";
import { IoMailOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";


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
        <Flex w={{base:"90%", lg:"60%"}}  placeSelf={"start"} roundedRight={{base:"80%", lg:"80%"}} px={5} flexDir={"column"} pb={{base: 20, lg: 3}}
          border={"1px solid rgba(66, 153, 225, 0.5)"} borderStart={"none"} boxShadow={"0 0 20px rgba(66, 153, 225, 0.2)"} justifyContent={"center"}>
            <Heading lineHeight={"90px"}>VISI</Heading>
            <Text w={{base: "70%", lg:"80%"}} fontSize={{lg: "md"}}>
              Menjadikan OSIS SMA Swasta Sultan Agung sebagai wadah yang menampung seluruh aspirasi dan kreatif bagi siswa 
              yang berintegritas, religius, berkarakter, inovatif, dan berprestasi. Kami berkomitmen untuk memberikan dampak 
              positif di lingkungan sekolah dan masyarakat, dan juga mendorong kesadaran sosial dan tanggung jawab lingkungan sekitar.
            </Text>

            <Heading lineHeight={"90px"}>MISI</Heading>
            <UnorderedList fontSize={{lg: "md"}}>
              <ListItem w={{base: "75%", lg:"75%"}}>Menyelenggarakan berbagai kegiatan guna meningkatkan dan mengembangkan bakat, minat dan keterampilan prestasi siswa dari segi akademik maupun non akademik.</ListItem>
              <ListItem w={{base: "75%", lg:"75%"}}>Meneruskan dan Mengembangkan program kerja OSIS dan membangun lingkungan sekolah yang sehat dan bersih.</ListItem>
              <ListItem w={{base: "75%", lg:"75%"}}>Menyelenggarakan festival seni dan budaya, termasuk pameran karya siswa dan pentas seni.</ListItem>
              <ListItem w={{base: "75%", lg:"75%"}}>Memperkuat solidaritas dan kebersamaan antar siswa dengan menyelenggarakan acara peringatan hari besar nasional yang melibatkan partisipasi seluruh siswa.</ListItem>
              <ListItem w={{base: "75%", lg:"75%"}}>Mendukung kegiatan sosial dan kemanusiaan, mengorganisir kegiatan amal seperti bakti sosial.</ListItem>
              <ListItem w={{base: "75%", lg:"75%"}}>Berkomitmen untuk menjalin kerjasama yang baik dengan berbagai pihak, baik antar sekolah maupun dengan pihak luar, guna meningkatkan prestasi sesuai dengan perkembangan teknologi.</ListItem>

            </UnorderedList>
          </Flex>

        <Flex w={{base:"95%", lg: "40%"}} placeSelf={"center"} flexDir={{base: "column", lg: "row"}} display={{base: "block", lg:"block"}} h={{base: "fit-content", lg: "700px"}} rounded={"3xl"} p={4}
        boxShadow={"0 0 20px rgba(66, 153, 225, 0.3)"} border={"1px solid rgba(66, 153, 225, 0.1)"} mt={{base: 10, lg: 0}}>
          <Heading textAlign={"center"} fontSize={"2xl"}>DAFTAR RENCANA TAHUN 2024.2025</Heading>
          <Division text={""} colorMode={colorMode} pt={0} ptlg={'1em'}/>
          <List spacing={3}>
            {/* MM/DD/YY */}
            <ListKegiatan text={"Pemilihan Ketua Osis"}date={"1/22/2024"} /> 
            <ListKegiatan text={"Pelantikan Ketua OSIS"} date={"2/12/2024"} />
            <ListKegiatan text={"Lomba 17 Agustus"} date={"5/20/2024"} />
            <ListKegiatan text={"Batik Day"} date={"7/21/2024"} />
            <ListKegiatan text={"OSIS Cup"} date={"9/20/2024"} />
            <ListKegiatan text={"Traktir siswa makan"} date={"10/9/2024"} />
            <ListKegiatan text={"Bagi-bagi duit 100.000.000"} date={"1/1/2025"} />
          </List>
        </Flex>
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

function ListKegiatan({text, date}){
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  
  let now = new Date()
  const pastDate = new Date(date)
  const isCompleted = now.getTime() >  pastDate.getTime()

  now = now.toLocaleDateString("id-ID", options)
  date = pastDate.toLocaleDateString('in-ID', options)

  return(
    <Flex alignItems={"center"} justifyContent={"space-between"} fontSize={"md"}>
      <Flex alignItems={"center"} gap={2} w={"60%"}>
        <Box as={isCompleted ? IoMdCheckboxOutline : MdSettings} color={isCompleted? "green.500" : "gray.600"}/>
        <ListItem>{text}</ListItem>
      </Flex>
      <RxDividerVertical opacity={0.3} size={20}/>
      <Box w={"40%"}>
        <Text textAlign={"start"}>{date}</Text>
      </Box>
        
    </Flex>
  )
}


function Division({text, colorMode, pt=7, ptlg="5em"}){
  return (
    <Flex alignItems={"center"} pos={"relative"} minW={"full"} gap={4} px={4} py={3} pt={{base: pt, lg: ptlg}}>
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