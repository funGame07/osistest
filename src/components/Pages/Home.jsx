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
  AspectRatio,
 } from "@chakra-ui/react"

// ### Import package from node_modules 
import { Link, useNavigate } from "react-router-dom";
import Carousel from "../carousel/Carousel";
import { useContext } from "react";
import { osis } from "../../App";

// ### Import package 
import { FaExchangeAlt, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { MdSettings } from "react-icons/md";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { GiCycle } from "react-icons/gi";
import { MdLabelImportantOutline } from "react-icons/md";





import "./home.css"

function Home() {
  const navigate = useNavigate()
  const {colorMode} = useContext(osis)
  const borderColor = "rgba(155,155,155, 0.5)"
  const visiMisi = colorMode == "light" ? "gray.100" : "gray.600"
  
  async function handleLive(){
    // send subject to database
    navigate("/quizinvitation", {state: {isAdmin: false, nis:"12345"}})
  }

  const fadeIn =keyframes`
  0%{
      transform: translateX(-200px);
      opacity: 0.2
    }
    50%{
      transform: translateX(0px);
      opacity: 0.7
    }
    100%{
      transform: translateX(0px);
      opacity: 1
    }
  `

  const fadeInReverse =keyframes`
  0%{
      transform: translateX(250px);
      opacity: 0.2
    }
    50%{
      opacity: 0.7
    }
    100%{
      transform: translateX(0px);
      opacity: 1
    }
  `

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
  function handleWhatsApp(){
    const url = "https://wa.me/6281396716769?text=halo"
    window.open(url, '_blank')
  }

  return(
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} px={{base: 0, md: 10, lg: "0"}} pos={"relative"} overflow={"hidden"}>
      <Image src="schoolbg.png" pos={"absolute"} w={"full"} objectFit={"cover"} h={"100vh"} filter={"auto"} brightness={"0.4"}/>
      <Box pos={"absolute"} w={"120%"} mx={"auto"} h={"100vh"} filter={"auto"} brightness={"0.9"} top={"100vh"} overflow={"hidden"}>
        
      </Box>
    
      <Flex pt={{base: "120px", lg: "0"}} minH={"100vh"} flexDir={{base: "column", lg: "row"}} color={"white"}
      alignItems={"center"} gap={{base: 3, lg:1}} pos={"relative"} minW={"full"} px={{lg: "6%"}}>
        <Box order={{base: 0, lg: 1}} display={"flex"} flexDir={"column"} justifyContent={"center"} alignItems={"center"} h="230px" my={5} mx={"auto"} w={{base: "full" ,sm: "40%", lg: "50%"}} pos={"relative"} animation={`${fadeInReverse} 2s linear`}> 
          <Image src="sultanagung.png" rounded={"full"} maxW={{base: "230px", lg: "420px"}}transform={"rotate(13deg)"} pos={"absolute"} top={{base:"-2em", lg: "-6em"}} left={{base: "2em"}}/>
          <Image src="sultanagung2.png" rounded={"full"} maxW={{base: "230px", lg: "420px"}} transform={"rotate(-10deg)"} pos={"absolute"} top={{base: "5em", lg: "7em"}} right={{base: "0em"}} zIndex={10}/>
        </Box>
        
        <Flex flexDir={"column"} w={{base: "full", lg:"50%"}} alignItems={{base: "center", lg: "start"}} animation={`${fadeIn} 2.5s linear`}>
          <Text fontSize={{base: "xs", lg: "sm"}} fontWeight={"400"} opacity={0.8}>
            OSIS SMA #The best
          </Text>
          <Text className="font-link" w={"100%"} fontSize={{base: "2xl", lg: "6xl"}} fontWeight={"800"} textAlign={{base:"center", lg: "start"}} lineHeight={1}>
            OSIS SULTAN AGUNG
          </Text>
          <Text className="font-link" opacity={0.8} textAlign={{base:"center", lg:"start"}} maxW={{base: "55%", lg: "80%"}} fontSize={{base: "15px", lg: "sm"}} fontWeight={"600"}>
            Jelajahi dunia OSIS Sultan Agung! Temukan beragam fitur menarik dan aktifkan petualanganmu bersama kami.        
          </Text>
          <Text fontSize={{base: "sm", lg: "md"}} fontWeight={"400"} opacity={0.8}>
          Selamat Mengeksplore
          </Text>
          <Link to={"/explore"} style={{width: "40%"}}>
            <Button className="font-link" color={"white"} mt={7} bgColor={"rgba(66, 153, 225, 0.4)"} variant={"outline"} colorScheme={"yellow"} w={"full"} size={"md"} rounded={"full"}>
              Explore
            </Button>
          </Link>
        </Flex>
        
        
      </Flex>

      {/* <Box bg={"yellow.400"} w={"130%"}>
        <Heading textAlign={"center"} fontWeight={900} lineHeight={1.5} color={"white"}>WELCOME TO OSIS</Heading>
      </Box> */}
      <Box w={"full"} px={{lg: "6%"}}>
        <Carousel />
      </Box>
     

      {/* <Division text={""} colorMode={colorMode}/> */}

      <Flex flexDir={"column"} h={"fit-content"} w={"100%"} gap={{base: 5, lg: 5}} mt={{base: "1em", lg: "1em"}} alignItems={"center"}
      pos={"relative"} py={10} px={"6%"} color={"white"}>
        <Image src="visimisi.webp" pos="absolute" w={"full"} h={"full"} objectFit={"cover"} zIndex={0} filter={"auto"} brightness={0.7}/>
        <Heading fontSize={"2xl"} zIndex={9} py={8}>Visi dan Misi</Heading>

        <Flex w={"full"} gap={10} flexDir={{base: "column", lg: "row"}} zIndex={9}>
          <Box border={`1px solid ${borderColor}`} rounded={"xl"} p={5} w={{base: "90%", lg:"30%"}} mx={"auto"} h={"fit-content"} boxShadow={"-2px 8px 15px -5px rgba(0,0,0,0.5)"}>
            <Flex alignItems={"center"} rounded={"lg"} mb={4}>
              <MdLabelImportantOutline size={30}/>
              <Text className="roboto" fontSize={"2xl"}>Visi</Text>
            </Flex>
            <Text fontSize={{lg: "md"}}>
              Menjadikan OSIS SMA Swasta Sultan Agung sebagai wadah yang menampung seluruh aspirasi dan kreatif bagi siswa 
              yang berintegritas, religius, berkarakter, inovatif, dan berprestasi. Kami berkomitmen untuk memberikan dampak 
              positif di lingkungan sekolah dan masyarakat, dan juga mendorong kesadaran sosial dan tanggung jawab lingkungan sekitar.
            </Text>
          </Box>

          <Box border={`1px solid ${borderColor}`} rounded={"xl"} p={5} w={{base: "90%", lg:"70%"}} mx={"auto"} h={"fit-content"} boxShadow={"-2px 8px 15px -5px rgba(0,0,0,0.5)"}>
            <Flex alignItems={"center"} rounded={"lg"} mb={4}>
              <MdLabelImportantOutline size={30}/>
              <Text className="roboto" fontSize={"2xl"}>Misi</Text>
            </Flex>
            <UnorderedList fontSize={{lg: "md"}}>
              <ListItem w={{base: "85%", lg:"75%"}}>Menyelenggarakan berbagai kegiatan guna meningkatkan dan mengembangkan bakat, minat dan keterampilan prestasi siswa dari segi akademik maupun non akademik.</ListItem>
              <ListItem w={{base: "85%", lg:"75%"}}>Meneruskan dan Mengembangkan program kerja OSIS dan membangun lingkungan sekolah yang sehat dan bersih.</ListItem>
              <ListItem w={{base: "85%", lg:"75%"}}>Menyelenggarakan festival seni dan budaya, termasuk pameran karya siswa dan pentas seni.</ListItem>
              <ListItem w={{base: "85%", lg:"75%"}}>Memperkuat solidaritas dan kebersamaan antar siswa dengan menyelenggarakan acara peringatan hari besar nasional yang melibatkan partisipasi seluruh siswa.</ListItem>
              <ListItem w={{base: "85%", lg:"75%"}}>Mendukung kegiatan sosial dan kemanusiaan, mengorganisir kegiatan amal seperti bakti sosial.</ListItem>
              <ListItem w={{base: "85%", lg:"75%"}}>Berkomitmen untuk menjalin kerjasama yang baik dengan berbagai pihak, baik antar sekolah maupun dengan pihak luar, guna meningkatkan prestasi sesuai dengan perkembangan teknologi.</ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Flex>

      <Flex h={{lg:"500px"}} gap={{base: 5, lg: 0}} py={10} flexDir={{base: "column", lg: "row"}}  w={"full"} px={"6%"} alignItems={"center"} mt={20} bg={"gray.800"} color={"white"}>
        <Flex flexDir={"column"} w={{lg: "50%"}} gap={2}>
          <Heading>OUR LOCATION</Heading>
          <Text fontSize={"xs"} opacity={0.5} w={"90%"}>
          Our office is conveniently located at Jl. Surabaya No.19, Dwikora, Kec. Siantar Barat, Kota Pematang Siantar, Sumatera Utara, Indonesia. We are easily accessible by public 
          transportation and have ample parking available for visitors. If you have any questions or would like to schedule a visit, please don't 
          hesitate to contact us using the information provided on our Contact page.
          </Text>
        </Flex>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4316.547446693461!2d99.06208307532394!3d2.9571854970190166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3031845c4ecc4f3f%3A0xec67e372810d4470!2sYayasan%20Pendidikan%20Sultan%20Agung!5e1!3m2!1sid!2sid!4v1729094305875!5m2!1sid!2sid" 
        style={{border: 0, width: "50%", height: "80%"}} className="map"
        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Flex>
  
      <Flex w={"full"} h={{lg: "300px"}} flexDir={{base: "column", lg: "row"}} justifyContent={"space-between"} textAlign={"start"} mt={8} px={5} bg={"blue.800"} color={"white"} py={{base: 5, lg: 8}} pb={"5em"} gap={4}>   
        <Box w={{base: "70%", lg: "40%"}}>
          <Heading>Let's Talk</Heading>
          <Text fontSize={"xs"} opacity={0.5}>
            Everything starts with a conversation. Reach out to us and let's start a dialogue that could lead to exciting opportunities, valuable connections, or simply a friendly chat.
          </Text>
          <Image src="logoosis-white.png" w={"30%"} py={5}/>
        </Box>

        <Box w={{base: "70%" ,lg: "40%"}}>
          <Flex w={"full"}>
            <Flex w={"30%"} flexDir={"column"} gap={2}>
              <Text>Email</Text>
              <Text>Phone</Text>
              <Text>Address</Text>
            </Flex>

            <Flex w={"70%"} flexDir={"column"} gap={2}>
              <Link style={{display: "flex", alignItems: "center", gap:"1em"}} to={"mailto:elbertchen007@gmail.com"}>
                sultanosis09090@gmail.com
              </Link>

              <Link style={{display: "flex", alignItems: "center", gap:"1em"}} onClick={handleWhatsApp}>
                (+62) 81396716769
              </Link>

              <Link>
                Jl. Surabaya No.19, Dwikora, Kec. Siantar Bar., Kota Pematang Siantar, Sumatera Utara 21118
              </Link>
            </Flex>
          </Flex>

          <Flex mt={5}>
            <Text w={"30%"}>Socials</Text>
            <Flex gap={1} flexDir={"column"}>
              <Link to={"https://www.instagram.com/smassa24.25/"} style={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Box as={BsInstagram} size={"20px"}/>
                @smassa24.25
              </Link>

              <Link to={"https://www.instagram.com/smassultanagung.psa/"} style={{display: "flex", alignItems: "center", gap: "2px"}}>
                <Box as={BsInstagram} size={"20px"}/>
                @smassultanagung.psa
              </Link>
            </Flex>
            
          </Flex>
        </Box>
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
  const dateToDisplay = pastDate.toLocaleDateString('in-IN', options)

  now = now.toLocaleDateString("en-EN", options)
  date = pastDate.toLocaleDateString('en-EN', options)
  const isOnTask = now == date
  const isCompleted = (new Date(now)).getTime() >= (new Date(date)).getTime()

  return(
    <Flex alignItems={"center"} justifyContent={"space-between"} fontSize={"md"}>
      <Flex alignItems={"center"} gap={2} w={"60%"}>
        <Box as={isCompleted ? isOnTask? GoDotFill : IoMdCheckboxOutline : MdSettings} color={isCompleted? isOnTask? "yellow.500" : "green.500" : "gray.600"}/>
        <ListItem>{isCompleted ? isOnTask? text : <s>{text}</s> : text}</ListItem>
      </Flex>
      <RxDividerVertical opacity={0.3} size={20}/>
      <Box w={"40%"}>
        <Text textAlign={"start"}> {isCompleted ? isOnTask? dateToDisplay : <s>{dateToDisplay}</s> : dateToDisplay}</Text>
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


// <Flex w={{base:"95%", lg: "40%"}} minH={{base: "fit-content", lg:"full"}} placeSelf={"center"} flexDir={{base: "column", lg: "row"}} display={{base: "block", lg:"block"}} rounded={"2xl"} p={4}
// boxShadow={"0 0 20px rgba(66, 153, 225, 0.3)"} border={"1px solid rgba(66, 153, 225, 0.1)"} mt={{base: 10, lg: 0}}>
// <Heading textAlign={"center"} fontSize={"2xl"}>DAFTAR RENCANA TAHUN 2024.2025</Heading>
// <Division text={""} colorMode={colorMode} pt={0} ptlg={'1em'}/>
// <List spacing={3}>
//   {/* MM/DD/YY */}
//   <ListKegiatan text={"Pemilihan Ketua Osis"}date={"1/22/2024"} /> 
//   <ListKegiatan text={"Pelantikan Ketua OSIS"} date={"2/12/2024"} />
//   <ListKegiatan text={"Lomba 17 Agustus"} date={"5/20/2024"} />
//   <ListKegiatan text={"Batik Day"} date={"7/21/2024"} />
//   <ListKegiatan text={"OSIS Cup"} date={"9/20/2024"} />
//   <ListKegiatan text={"Traktir siswa makan"} date={"10/9/2024"} />
//   <ListKegiatan text={"Traktir siswa makan"} date={"10/10/2024"} />
//   <ListKegiatan text={"Pentas seni bertema kebebasan"} date={"10/11/2024"} />
//   <ListKegiatan text={"Pesta merayakan natal"} date={"12/25/2024"} />
//   <ListKegiatan text={"Bagi-bagi duit 100.000.000"} date={"1/1/2025"} />
// </List>
// </Flex>