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
import { HiOutlineTrophy } from "react-icons/hi2";


function BottomNav({colorMode}) {

// bgGradient={"linear(to-b, #302312, #4c320f)"}
// bgGradient={"linear(to-r, #241a0e, #302312, #302312)"}

  return (
    <Box className='bottom-nav' position={"fixed"} bgGradient={colorMode == "light"? "linear(to-b, gray.100, white)" : "linear(to-b, black, gray.800)"} zIndex={9999}>
        <Box className='nav' px={{base: 4, lg: 3}} gap={{base: 7, lg: 5}} py={{base: 0.5, lg:1}} display={"flex"} alignItems={{base: "center", lg: "start"}}
        borderRadius={"xl"} fontWeight={900} h={{base: "fit-content", lg: "40px"}} bgGradient={colorMode == "light"? "linear(to-r, gray.100, white, gray.100)" : "linear(to-r, black, gray.800, black)"}>
        <Link to={"/"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GoHome size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Home
                </Text>
            </Box>
        </Link>

        <Link to={"/explore"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <GrSearchAdvanced size={23} className='navicon' />
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Explore
                </Text>
            </Box>
        </Link>

        <Link to={"/admin"}>
            <CiSquarePlus size={40} className='navicon-mid' cursor={"pointer"}/>
        </Link>

        <Link to={"/voting"}> 
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <IoNotificationsOutline size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Voting
                </Text>
            </Box>
        </Link>

        <Link to={"/event"}>
            <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
                <HiOutlineTrophy size={23} className='navicon'/>
                <Text fontSize={{base: "13px", lg: "8px"}} lineHeight={{base: 1, lg: 0}}>
                    Event
                </Text>
            </Box>
        </Link>
        </Box>
    </Box>
  )
}

export default BottomNav