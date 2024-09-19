import React from 'react'
import { 
    Box,
    Text,
    Flex,
    Image
 } from '@chakra-ui/react'

function NoGames() {
  return (
    <Box>
        <Flex justifyContent={"center"} flexDir={"column"} alignItems={"center"} p={5} pt={8} gap={3}>
            <Flex gap={2} justifyContent={"center"}>
                <Text fontSize={"3xl"} fontWeight={600} letterSpacing={1} fontFamily={"fantasy"} style={{transform: "rotate(-9deg)"}}>Owh</Text>
                <Text fontSize={"3xl"} fontWeight={600} letterSpacing={1} fontFamily={"fantasy"} style={{transform: "rotate(8deg)"}}>noo...</Text>
            </Flex> 

            <Image src="nogames.png" />

            <Text maxW={"45%"} textAlign={"center"} fontSize={"lg"} fontWeight={700}>
                No games organized by OSIS right now...
            </Text>

            <Flex alignItems={"center"} py={20}>
                <Image src='logoalone.png' maxW={20}/>
                <Text fontSize={"lg"} fontWeight={700} letterSpacing={3}>Stay Tuned</Text>
            </Flex>
        </Flex>
        
        
    </Box>
  )
}

export default NoGames