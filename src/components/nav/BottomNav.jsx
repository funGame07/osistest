// ### Import package from node_modules
import React, { useContext }from 'react'

// ### Import package from chakra ui
import { Box } from '@chakra-ui/react'

// import context osis from App.jsx
import { osis } from '../../App';

// import coomponent from components/nav
import BottomNavContent from './BottomNavContent';

// import style
import "./navbar.css"

function BottomNav() {
    // Declaration Hooks
    const {colorMode, showBottomNavbar, setShowBottomNavbar} = useContext(osis)

  return (
    <Box className='bottom-nav' position={"fixed"}
    bg={"transparent"} 
    opacity={0.9}
    zIndex={1} 
    display={{base: showBottomNavbar ? "" : "none", lg: ""}}
    >
        <BottomNavContent />   
    </Box>
  )
}

export default BottomNav