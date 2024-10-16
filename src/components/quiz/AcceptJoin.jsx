import React, {useEffect, useState, useContext} from 'react'

import { 
    Flex,
    Box,
    Text,
    Button,
    Heading,
    keyframes
 } from '@chakra-ui/react'

 import { CiCircleCheck, CiCircleMinus  } from "react-icons/ci";

 import "./scrollbar.css"

 import { osis } from '../../App'

 import { IoCheckmarkOutline } from "react-icons/io5";
 import { LiaTimesSolid } from "react-icons/lia";
import { socketContext } from './QuizInvitation';


function AcceptJoin() {
    const {socket, nis} = useContext(socketContext)

    const {setShowBottomNavbar} = useContext(osis)
    const [acceptedPlayer, setAcceptedPlayer] = useState([])
    const [requestedPlayer, setRequestedPlayer] = useState([])


    useEffect(()=> {
        setShowBottomNavbar(false)

        socket.on("requestJoin", (nis) =>{
            setRequestedPlayer(prev => [...prev, nis])
        })

        socket.on("accepted", (socketNIS) =>{
            setAcceptedPlayer(prev => [...prev, socketNIS])
        })
        
    }, [])

  return (
    <Flex mt={20} px={2}>
        <Flex flexDir={"column"} pr={2} borderRight={"1px solid rgba(0,0,0,0.5)"} gap={3}>
            <Heading fontSize={"xl"} lineHeight={2} textAlign={"center"}>Requests</Heading>
            <Flex flexDir={"column"} alignItems={"center"} gap={3} w={"300px"} h={"60vh"} overflowY={'scroll'}>
                {requestedPlayer.map((nis, i)=> <RequestPlayer key={i} nis={nis} socket={socket}/>)}
            </Flex>
        </Flex>

        <Flex w={"full"} flexDir={"column"} gap={3} alignItems={"center"}>
            <Heading fontSize={"xl"} lineHeight={2} textAlign={"center"}>Accepted Player</Heading>
            <Box h={"60vh"} w={"full"} overflowY={'scroll'} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"}>
                <Flex gap={3} justifyContent={"center"} alignItems={"start"} flexWrap={"wrap"}>
                    {/* accepted user */}
                    {acceptedPlayer.map((nis, i) => <AcceptedPlayer nis={nis}/>)}
                    

                </Flex>
            </Box>
            <Text opacity={0.5}>{requestedPlayer.length} player/s waiting for you to start</Text>
            <Button color={"white"} bgColor={"red.500"}  jus colorScheme='red' w={"50%"}>Start</Button>
        </Flex>
    </Flex>
  )
}

function RequestPlayer({nis, socket}){
    const [display, setDisplay] = useState("flex")

    function handleAccept(){
        socket.emit("accepted", nis)
        socket.on("success", () =>{
            setDisplay("none")
        })
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
        <Flex w={"270px"} display={display} flexDir={"column"} justifyContent={"space-between"} p={2} px={4} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} rounded={"lg"} bg={"white"} gap={2}>
            <Box color={"black"} fontWeight={700}>
                <Text fontSize={"xl"} fontWeight={500} opacity={0.6}>{nis}</Text>
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

function AcceptedPlayer({nis}){
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
                <Text>{nis}</Text>
            </Box>
        </Flex>
    )
}

export default AcceptJoin