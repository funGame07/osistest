import { 
    Box,
    Text,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow
 } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import "./navbar.css"
import React, { useContext }from 'react'
import { GoHome } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import { GrSearchAdvanced } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { HiOutlineTrophy } from "react-icons/hi2";
import { osis } from '../../App';
import BottomNavContent from './BottomNavContent';


function BottomNav() {
    const {colorMode, showBottomNavbar, setShowBottomNavbar} = useContext(osis)
// bgGradient={"linear(to-b, #302312, #4c320f)"}
// bgGradient={"linear(to-r, #241a0e, #302312, #302312)"}

  return (
    <Box className='bottom-nav' position={"fixed"} 
    bg={{base: colorMode == "light"? "#EAEAEA" : "gray.900", lg: "transparent"}} 
    zIndex={9999} 
    display={{base: showBottomNavbar ? "" : "none", lg: ""}}
    >
        <BottomNavContent />
        {/* <Box>
            <Popover placement='right'>
                <PopoverTrigger>
                    <Button display={{base: "none", lg: "block"}} top={-5} right={0}>
                        <CiSquarePlus /> 
                    </Button>
                </PopoverTrigger>
                <PopoverContent>
                    <BottomNavContent />
                </PopoverContent>
            </Popover>
        </Box> */}
        
    </Box>
  )
}

export default BottomNav