// ### Import package from node_modules
import React, { useContext }from 'react'

// ### Import package from chakra ui
import { Box, Button } from '@chakra-ui/react'

// import context osis from App.jsx
import { osis } from '../../App';
import { BiHide } from "react-icons/bi";

// import coomponent from components/nav
import BottomNavContent from './BottomNavContent';

// import style
import "./navbar.css"

function BottomNav() {
    // Declaration Hooks
    const {setShowBottomNavbar} = useContext(osis)

  return (
    <Box className='bottom-nav' position={"fixed"}
    bg={"transparent"} 
    opacity={0.9}
    zIndex={9999} 
    >
        <Button size={"sm"} rounded={"full"} pos={"absolute"}  colorScheme={colorMode =="light" ? "blackAlpha" : "whiteAlpha"} color={"white"} variant={"solid"}
        right={5} top={"-50px"} onClick={()=> setShowBottomNavbar(prev => !prev)}>
          <BiHide />
        </Button>
        <BottomNavContent />   
    </Box>
  )
}

export default BottomNav