import { 
    Box, 
    keyframes, 
    Image, 
    Container, 
    Flex, 
    Text, 
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { useCookies } from 'react-cookie'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'
import "./navbar.css"
import { FiMoon } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlinePushPin } from "react-icons/md";
import { useState, createContext } from 'react';
import Modals from './VisitModal';


function Navbar({colorMode, toggleColorMode}) { 
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [cookies] = useCookies(["name"]);
    

    const setCookieHandler = (name) => {
        Cookies.set("name", name, { path: "/" });
    };

    function auth(){
        console.log(cookies.name);
    }

  return (
    <Box pos={"fixed"} w={"full"} zIndex={9999}>
        <Flex px={2} py={{base: 1, lg: "1px"}} bg={"#241a0e"} color={"white"}>
            <Image src='logo2.png' maxH={{base:9, lg: 6}}/>
            <Flex alignItems={"center"} flexGrow={1} justifyContent={"end"}>

                    <FiMoon opacity={0.7} onClick={toggleColorMode} cursor={"pointer"}/>
  
                <RxDividerVertical size={21} opacity={0.7}/>
                <Link to={"/login"}>
                    <Image src='osis.png' maxW={{base:8, lg: 6}} maxH={{base:6}} 
                    borderRadius={"lg"} border={"1px solid black"} onClick={auth}/>
                </Link>
                
            </Flex>
        </Flex>
        

        <Flex bgGradient={"linear(to-r, yellow.300, yellow.400)"} minH={{base: 9, lg: 6}} alignItems={"center"} px={2} py={1} justifyContent={'space-between'}>
            <Box display={"flex"} gap={2} fontSize={"sm"} alignItems={"center"} color={"black"}>
                <Text fontWeight={700} fontSize={{base: "sm", lg: "10px"}}>Sekolah</Text>
                <Image src='sultan.png' borderRadius={"full"} maxH={{base: 6, lg: 4}} maxW={{base: 6, lg: 4}}/>
                <Text fontWeight={600} fontSize={{base: "10px", lg: "7px"}}>SMA SWASTA SULTAN AGUNG</Text>
            </Box>
            <Button leftIcon={<MdOutlinePushPin style={{transform: "rotate(-45deg)", width: "12px"} } />} 
            colorScheme={"blue"} variant='solid' h={{base: "21px", lg: "19px"}} px={{base: 2, lg: 1}} display={"flex"} alignItems={"center"}
            onClick={onOpen} >
                <Text fontSize={{base: "10px", lg: "7px"}} placeSelf={"center"} >Visit</Text>
            </Button>
        </Flex>

        {/* modals */}
        <Modals isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </Box>
  )
}

export default Navbar