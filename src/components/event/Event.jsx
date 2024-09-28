import React, { useState } from 'react'
import NoEvent from './NoEvent';
import YesEvent from './YesEvent';
import { 
    Box,
} from '@chakra-ui/react'


function Event() {
    const [game, setGame] = useState(true)

  return (
    <Box py={20}>
        {game? <YesEvent /> : < NoEvent/>}
    </Box>
  )
}

export default Event