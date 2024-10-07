// ### Import package from node_modules
import React, { useContext } from 'react';

// ### Import package from chakra ui
import { 
    Box, 
    Image, 
    Flex, 
    Text, 
    Button,
    useDisclosure,
} from '@chakra-ui/react'
import "./navbar.css"

// ### Import icons from node_modules
import { FiMoon, FiSun } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlinePushPin } from "react-icons/md";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";

// import context osis from App.jsx
import { osis } from '../../App'

// import coomponent from components/nav
import Modals from '../modal/VisitModal';
import AuthPopover from './AuthPopover';

function Navbar() { 
    // Declaration Hooks
    const {colorMode, toggleColorMode, toggleFs} = useContext(osis)
    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pos={"fixed"} w={"full"} zIndex={1000}>
        <Flex px={2} py={{base: 1, lg: "1px"}} bg={"#241a0e"} color={"white"}>
            <Image src='logoosis-white.png' maxH={{base:8, lg: 8}}/>
            <Flex alignItems={"center"} flexGrow={1} justifyContent={"end"}>
                {true ? <RxEnterFullScreen opacity={0.7} onClick={toggleFs} cursor={"pointer"}/>:
                        <RxExitFullScreen opacity={0.7} onClick={toggleFs} cursor={"pointer"} />}
                <RxDividerVertical size={21} opacity={0.7}/>

                {colorMode == "light" ? <FiMoon opacity={0.7} onClick={toggleColorMode} cursor={"pointer"}/>:
                                        <FiSun opacity={0.7} onClick={toggleColorMode} cursor={"pointer"} />}
                <RxDividerVertical size={21} opacity={0.7}/>

            <AuthPopover />
                
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