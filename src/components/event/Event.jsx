import React, { useState } from 'react'
import NoEvent from './NoEvent';
import YesEvent from './YesEvent';
import { 
    Box,
    Text,
    Flex,
    AspectRatio,
    Image,
    Button
} from '@chakra-ui/react'
import { FcRules } from "react-icons/fc";


function Event() {
    const [game, setGame] = useState(true)

  return (
    <Box py={20}>
        {game? <YesEvent /> : < NoEvent/>}
    </Box>
  )
}

export default Event