import React, {useEffect, useState, useContext} from 'react'

import { 
    Flex,
    Spinner,
    Box,
    Text,
    Button,
 } from '@chakra-ui/react'

 import { socketContext } from './QuizInvitation'

function RequestJoin() {
    const {socket, nis, name} = useContext(socketContext)

    const [Accepted, setAccepted] = useState(false)
    const [ready, setReady] = useState(true)

    useEffect(()=>{
        // user reconnect
        socket.emit("user-reconnect", name, nis)

        socket.on("is-reconnected", (isReconnect) =>{
            if(!isReconnect){
                // user requesting to join quiz
                socket.emit("request-join", name, nis)
            }else{
                setAccepted(true)
            }
        })
        

        // if host accept the request
        socket.on("accepted", ()=>{
            console.log("im accepetd")
            setAccepted(true)
        })

        socket.on("started", room =>{
            if(Accepted){
                socket.emit("join-room", room)
                
            }   
            console.log(Accepted)
            socket.on("joined", message =>{
                console.log(message)
            })
            console.log("dd")
        })
        


        // return () => {
        //     socket.disconnect();
        // };
    }, [])

  return (
    <Flex minH={"100vh"} maxW={"100vw"} justifyContent={"center"} alignItems={"center"} flexDir={"column"} gap={3}>

        {!Accepted && <Flex alignItems={"center"} gap={3} flexDir={{base: "column", lg: "row"}}>
          <Spinner
            thickness='4px'
            speed='0.7s'
            color='red.500'
            size='xl'
            />
            <Text fontSize={"xl"}>Menunggu panitia menerima anda</Text>  
        </Flex>}

        {Accepted && <Flex justifyContent={"center"} alignItems={"center"} flexDir={{base: "column"}} gap={2} maxW={"100vw"}>
            <Box>
                <Text fontSize={"1.5em"} fontWeight={"600"} textAlign={"center"}>Anda telah diterima sebagai peserta</Text>
                {/* <Text opacity={0.5} textAlign={"center"} fontWeight={"500"} fontSize={"lg"}>tekan ready</Text> */}
            </Box>
            
            <Button bgColor={"red.500"} colorScheme='red' color={"white"} fontWeight={"700"} size={"lg"} 
            p={"2.5em"} fontSize={"2xl"} w={"90%"} onClick={()=> setReady(prev => true)}
            leftIcon={ready? <Spinner thickness='4px' speed='0.7s' color='blue.500' size='xl'/>: ""}>
                {!ready ? "Ready" : "Menunggu Dimulai"}
            </Button>
        </Flex>}
    </Flex>
  )
}

export default RequestJoin