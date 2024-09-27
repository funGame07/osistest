import React from 'react'
import { 
    Text,
    Flex,
    AspectRatio,
    Image,
    Button,
    Box
} from '@chakra-ui/react'
import { FcRules } from "react-icons/fc";


function YesEvent() {
  return (
    <Flex p={5} pt={8} flexDir={{base: "column"}} gap={{base: 8}} pos={"relative"} alignItems={"center"} minH={"fit-content"}>
        <Text fontSize={{base: "3xl", lg: "3xl"}} fontWeight={600} letterSpacing={1} fontFamily={"fantasy"} style={{transform: "rotate(-5deg)"}}
        bgGradient={"linear(to-r, teal.700, teal, red.700)"} bgClip={"text"} textShadow={"0 0 60px gray"}
        >GAME IS BACK!!</Text>
        <Flex flexDir={{base: "column", md:"row"}} minW={{base: "100%", md:"90%"}} maxW={{base: "100%", md:"90%"}} gap={{base: 8, md: 8}} justifyContent={"center"}>
            <AspectRatio minW={{base:"85%", md:"350px"}} maxW={{base:"85%", md:"350px"}} ratio={3/4} margin={{base: "auto", md: "0"}}>
                <Image src="poster3.png" rounded={"2xl"} boxShadow={"dark-lg"} filter={"brightness(0.8)"} border={"2px solid #39240b"}/>
            </AspectRatio>
            
            <Box display={"flex"} flexDir={"column"} gap={3} minH={"100%"} justifyContent={"space-between"}>
            <Button colorScheme='teal' px={"40%"} order={{base: "0", md:"1"}} maxW={{base: "85%", md: "full"}} margin={{base: "auto", md: "0"}}>Ikuti</Button>
            <Text fontWeight={700} fontSize={"2xl"}>Rules</Text>
            
                <Flex flexDir={"column"} gap={2} fontWeight={700} maxH={{md:"350px"}} overflowY={{md: "scroll"}}>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Anggota OSIS tidak ikut berpartisipasi
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Tiap kelas mempersiapkan 3 orang
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Harus ada ketua sebagai perwakilan tiap kelas
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Anggota OSIS tidak ikut berpartisipasi
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Tiap kelas mempersiapkan 3 orang
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Harus ada ketua sebagai perwakilan tiap kelas
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Anggota OSIS tidak ikut berpartisipasi
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Tiap kelas mempersiapkan 3 orang
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Harus ada ketua sebagai perwakilan tiap kelas
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Tiap kelas mempersiapkan 3 orang
                    </Text>
                    <Text display={"flex"} alignItems={"center"}>
                        <FcRules size={"30px"}/>
                        Harus ada ketua sebagai perwakilan tiap kelas
                    </Text>
                </Flex>
            </Box>
        </Flex>        
    </Flex>
  )
}

export default YesEvent