import React, {useContext} from 'react'
import { 
    Text,
    Flex,
    AspectRatio,
    Image,
    Button,
    Box
} from '@chakra-ui/react'
import "./event.css"
import { FcRules } from "react-icons/fc";
import { osis } from '../../App';


function YesEvent() {
    const {colorMode} = useContext(osis)
  return (
    <Flex p={5} pt={8} flexDir={{base: "column"}} gap={{base: 8}} pos={"relative"} alignItems={"center"} minH={"fit-content"}>
        <Text fontSize={{base: "3xl", lg: "3xl"}} fontWeight={900} letterSpacing={1} fontFamily={"sans"} style={{transform: "rotate(-5deg)"}}
        bgGradient={colorMode == "light"?"linear(to-r, teal.700, teal, teal.700)": "linear(to-r, yellow, #e2d000, yellow)"} bgClip={"text"} textShadow={"0 0 60px gray"} className='font-link' textAlign={"center"}
        >NEW EVENT IS BACK!!</Text>
        <Flex flexDir={{base: "column", md:"row"}} minW={{base: "100%", md:"90%"}} maxW={{base: "100%", md:"90%"}} gap={{base: 8, md: 8}} justifyContent={"center"}>
            <AspectRatio minW={{base:"85%", md:"350px"}} maxW={{base:"85%", md:"350px"}} ratio={3/4} margin={{base: "auto", md: "0"}}>
                <Image src="poster3.png" rounded={"2xl"} boxShadow={"dark-lg"} filter={"brightness(0.8)"} border={"2px solid #39240b"}/>
            </AspectRatio>
            
            <Box display={"flex"} flexDir={"column"} gap={3} minH={"100%"} justifyContent={"space-between"}>
            <Button bgColor={colorMode== "light"? "teal" : "#e2d000"} colorScheme={colorMode== "light"? "teal" : "yellow"}
             px={"40%"} order={{base: "0", md:"1"}} maxW={{base: "85%", md: "full"}} margin={{base: "auto", md: "0"}}>Ikuti</Button>
            <Text fontWeight={700} fontSize={"2xl"}>Rules 🚀</Text>
            
                <Flex flexDir={"column"} gap={2} fontWeight={700} maxH={{md:"350px"}} overflowY={"auto"} h={"full"}>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"24px"}/>
                        Anggota OSIS tidak ikut berpartisipasi
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"24px"}/>
                        Tiap kelas mempersiapkan 3 orang
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"24px"}/>
                        Harus ada ketua sebagai perwakilan tiap kelas
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"24px"}/>
                        Anggota OSIS tidak ikut berpartisipasi
                    </Text>
                    
                    
                </Flex>
            </Box>
        </Flex>        
    </Flex>
  )
}

export default YesEvent
