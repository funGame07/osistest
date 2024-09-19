import React, { useState } from 'react'
import NoGames from './NoGames';
import YesGames from './YesGames';
import { 
    Box,
    Text,
    Flex,
    AspectRatio,
    Image,
    Button
} from '@chakra-ui/react'
import { FcRules } from "react-icons/fc";


function Games() {
    const [game, setGame] = useState(true)

  return (
    <Box py={20}>
        {game? <YesGames /> : < NoGames/>}
    </Box>
  )
}

export default Games