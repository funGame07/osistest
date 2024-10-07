// ### Import package from node_modules
import React, { useState } from 'react'

// ### Import package from chakra ui
import { 
    Box,
} from '@chakra-ui/react'

// ### Import pages from components/event
import NoEvent from './NoEvent';
import YesEvent from './YesEvent';


function Event() {
  // Declaration Hooks
    const [game, setGame] = useState(true)

  return (
    <Box py={20}>
        {game? <YesEvent /> : < NoEvent/>}
    </Box>
  )
}

export default Event