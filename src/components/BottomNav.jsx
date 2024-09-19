import { 
    Box,
    Text,
    Button
 } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import React from 'react'
import { GoHome } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { GrSearchAdvanced } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoGameControllerOutline } from "react-icons/io5";


function BottomNav({colorMode}) {

// bgGradient={"linear(to-b, #302312, #4c320f)"}
// bgGradient={"linear(to-r, #241a0e, #302312, #302312)"}

  return (
    <Box className='bottom-nav' position={"fixed"} bgGradient={colorMode == "light"? "linear(to-b, gray.200, white)" : "linear(to-b, black, gray.800)"} zIndex={9999}>
        <Box className='nav' px={{base: 4, lg: 3}} gap={{base: 5, lg: 5}} py={{base: 0.5, lg:0}} display={"flex"} alignItems={"center"} 
        borderRadius={"xl"} fontWeight={900} h={{base: "fit-content", lg: "40px"}} bg={colorMode == "light"? "white" : "black"}>
        <Link to={"/"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GoHome size={26} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Home
                </Text>
            </Box>
        </Link>

        <Link to={"/explore"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GrSearchAdvanced size={26} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Explore
                </Text>
            </Box>
        </Link>

            <CiSquarePlus size={45} className='navicon-mid' cursor={"pointer"}/>

        <Link to={"/voting"}> 
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <IoNotificationsOutline size={26} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Voting
                </Text>
            </Box>
        </Link>

        <Link to={"/games"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <IoGameControllerOutline size={26} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Games
                </Text>
            </Box>
        </Link>
        </Box>
    </Box>
  )
}

export default BottomNav