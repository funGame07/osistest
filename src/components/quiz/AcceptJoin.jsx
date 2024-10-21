import React, {useEffect, useState, useContext} from 'react'

import { 
    Flex,
    Box,
    Text,
    Button,
    Heading,
    keyframes
 } from '@chakra-ui/react'

 import "./scrollbar.css"

 import { osis } from '../../App'

 import { IoCheckmarkOutline } from "react-icons/io5";
 import { LiaTimesSolid } from "react-icons/lia";
import { socketContext } from './QuizInvitation';


function AcceptJoin() {
    const {socket, nis, name} = useContext(socketContext)

    const {setShowBottomNavbar} = useContext(osis)
    const [acceptedPlayer, setAcceptedPlayer] = useState([])
    const [requestedPlayer, setRequestedPlayer] = useState([])

    function handleStart(){
        socket.emit("start", "0001")
        socket.on("joined", message =>{
            console.log(message)
        })
    }

    useEffect(()=> {
        setShowBottomNavbar(false)

        socket.emit("host-reconnect", nis);

        // reconnect if the host disconnect
        socket.on("is-reconnect", (isReconnect) => {
            console.log("Received is-reconnect:", isReconnect);
            if (!isReconnect) {
                console.log("Host is not recognized, emitting host event with nis:", nis);
                socket.emit("host", nis);
            } else {
                console.log("Host is recognized as reconnected.");
            }
        });

        socket.on("accepted-user", (acceptedUser) =>{
            console.log(acceptedUser)
            setAcceptedPlayer(acceptedUser)
        })
        socket.on("requested-user", (requestedUser) =>{
            console.log(requestedUser)
            setRequestedPlayer(requestedUser)
        })

        //check whos is requesting to join
        socket.on("request-join", (nameNisObj) =>{
            console.log(nameNisObj)
            setRequestedPlayer(prev => [...prev, nameNisObj])
        })

        socket.on("accepted", (nameNisObj) =>{
            setAcceptedPlayer(prev => [...prev, nameNisObj])
        })
        
    }, [])

  return (
    <Flex mt={20} px={2} flexDir={{base: "column", lg: "row"}}>
        <Flex flexDir={"column"} pr={2} borderRight={"1px solid rgba(0,0,0,0.5)"} gap={3} order={{base:1, lg: 0}}>
            <Heading fontSize={"xl"} lineHeight={2} textAlign={"center"}>Requests</Heading>
            <Flex flexDir={"column"} alignItems={"center"} gap={3} w={"300px"} h={"60vh"} overflowY={'scroll'}>
                {requestedPlayer.map((nameNisObj, i)=> <RequestPlayer key={i} name={nameNisObj.name} nis={nameNisObj.nis} socket={socket}/>)}
            </Flex>
        </Flex>

        <Flex w={"full"} flexDir={"column"} gap={3} alignItems={"center"}>
            <Heading fontSize={"xl"} lineHeight={2} textAlign={"center"}>Accepted Player</Heading>
            <Box h={"80vh"} w={"full"} overflowY={'scroll'} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"}>
                <Flex gap={3} justifyContent={"center"} alignItems={"start"} flexWrap={"wrap"}>
                    {/* accepted user */}
                    {acceptedPlayer.map((nameNisObj, i) => <AcceptedPlayer key={i} name={nameNisObj.name} nis={nameNisObj.nis}/>)}
                    

                </Flex>
            </Box>
            <Text opacity={0.5}>{acceptedPlayer.length} player/s waiting for you to start</Text>
            <Button color={"white"} bgColor={"red.500"} colorScheme='red' w={"50%"} onClick={handleStart}>Start</Button>
        </Flex>
    </Flex>
  )
}

function RequestPlayer({nis, socket, name}){

    function handleAccept(){
        socket.emit("accept-user", name, nis)
    }

    const accepted = keyframes`
        from{
            opacity: 0
        }
        75%{
            transform: scale(1.1)
        }
        to{
            opacity: 1
        }
    `
    return(
        <Flex w={"270px"} display={"flex"} flexDir={"column"} justifyContent={"space-between"} p={2} px={4} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} rounded={"lg"} bg={"white"} gap={2}>
            <Box color={"black"} fontWeight={700}>
                <Text fontSize={"xl"} fontWeight={500} opacity={0.6}>{name} ({nis})</Text>
                <Text fontSize={"xs"} opacity={0.5}>Requesting to be a player</Text>
            </Box>
            <Flex gap={2} placeSelf={"end"}>
                <Button size={"sm"}>
                    <LiaTimesSolid/>
                </Button>
                <Button color={"white"} bgColor={"green.500"} colorScheme='green' size={"sm"} leftIcon={<IoCheckmarkOutline/>} onClick={handleAccept}>Accept?</Button>
            </Flex>
            
        </Flex>
    )
}

function AcceptedPlayer({nis, name}){
    const accepted = keyframes`
        from{
            opacity: 0
        }
        75%{
            transform: scale(1.1)
        }
        to{
            opacity: 1
        }
    `

    return(
        <Flex alignItems={"center"} justifyContent={"space-between"} p={2} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} 
        animation={`${accepted} 0.5s ease-in`} rounded={"sm"} bg={"white"}>
            <Box color={"black"} fontWeight={700} px={2}>
                <Text>{name} ({nis})</Text>
            </Box>
        </Flex>
    )
}

export default AcceptJoin