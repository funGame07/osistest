// ### Import package from node_modules
import React, { useContext }from 'react'
import { Link } from 'react-router-dom';

// ### Import package from chakra ui
import { 
    Box,
    Text
 } from '@chakra-ui/react'

// ### Import icons from node_modules
import { GoHome } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { GrSearchAdvanced } from "react-icons/gr";
import { HiOutlineTrophy } from "react-icons/hi2";
import { MdHowToVote } from "react-icons/md";
import { MdOutlineHowToVote } from "react-icons/md";


// import context osis from App.jsx
import { osis } from '../../App';

// import style
import "./navbar.css"

function BottomNavContent() {
    // Declaration Hooks
    const {colorMode, showBottomNavbar, setShowBottomNavbar} = useContext(osis)
    
  return (
    <Box className='nav' px={{base: 4, lg: 3}} gap={{base: 7, lg: 5}} py={{base: 0.5, lg:1}}  alignItems={{base: "center", lg: "start"}} display={{base: "flex", lg: "none"}}
        rounded={"3xl"} fontWeight={700} h={{base: "fit-content", lg: "40px"}} bgGradient={colorMode == "light"? "linear(to-r, gray.100, white, gray.100)" : "linear(to-r, black, gray.800, black)"}>
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
                <MdOutlineHowToVote size={23} className='navicon'/>
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
  )
}

export default BottomNavContent