import React, {useEffect, useState, useContext} from 'react'
import io from "socket.io-client"

import { 
    Flex,
    Spinner,
    Box,
    Text,
    Button,
    Heading
 } from '@chakra-ui/react'

 import { socketContext } from './QuizInvitation'

function RequestJoin() {
    const {socket, nis} = useContext(socketContext)

    const [Accepted, setAccepted] = useState(false)
    const [ready, setReady] = useState(false)

    useEffect(()=>{
        socket.emit("requestJoin", nis)

        socket.on("accepted", (socketNIS)=>{
            socketNIS === nis && setAccepted(true)
        })

        // return () => {
        //     socket.disconnect();
        // };
    }, [])

  return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} flexDir={"column"} gap={3}>

        {!Accepted && <Flex alignItems={"center"} gap={3} flexDir={{base: "column", lg: "row"}}>
          <Spinner
            thickness='4px'
            speed='0.7s'
            color='red.500'
            size='xl'
            />
            <Text fontSize={"xl"}>Menunggu panitia menerima anda</Text>  
        </Flex>}

        {Accepted && <Flex justifyContent={"center"} alignItems={"center"} flexDir={{base: "column"}} gap={2}>
            <Box>
                <Text fontSize={"3xl"} fontWeight={"600"} textAlign={"center"}>Anda telah diterima sebagai peserta</Text>
                <Text opacity={0.5} textAlign={"center"} fontWeight={"500"} fontSize={"lg"}>tekan ready</Text>
            </Box>
            
            <Button bgColor={"red.500"} colorScheme='red' color={"white"} fontWeight={"700"} size={"lg"} 
            p={20} fontSize={"2xl"} w={"90%"} onClick={()=> setReady(prev=> !prev)}
            leftIcon={ready? <Spinner thickness='4px' speed='0.7s' color='blue.500' size='xl'/>: ""}>
                {!ready ? "Ready" : "Menunggu Dimulai"}
            </Button>
        </Flex>}
    </Flex>
  )
}

export default RequestJoin