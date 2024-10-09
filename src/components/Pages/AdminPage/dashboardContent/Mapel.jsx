import React from 'react'
import { FaFolderOpen } from "react-icons/fa6";
import { 
    Box,
    Text,
    Flex,
    Button,
    Badge,
 } from '@chakra-ui/react';


function Mapel({customColor, mapel="", jumlah="", judul="", note="", img=""}){
    const blue = ["#3558c3", "linear(to-b, transparent, rgba(53, 94, 219, 0.6), #3558c3)", "blue"]
    const cyan = ["#31aed9", "linear(to-b, transparent, rgba(49, 90, 217,0.6), #31aed9)", "blue"]
    const green = ["#366d33", "linear(to-b, transparent, rgba(61, 133, 94,0.6), #366d33)", "green"]
    const yellow = ["#a3a036", "linear(to-b, transparent, rgba(211, 206, 45,0.6), #a3a036)", "yellow"]
    const red = ["#cc2727", "linear(to-b, transparent, rgba(156, 56, 56,0.6), #cc2727)", "red"]
    const noColor = ["#b7b5b5", "linear(to-b, transparent, rgba(113, 113, 113,0.6), #b7b5b5)", "gray"]

    customColor = customColor == "blue" ? blue :
                    customColor == "cyan" ? cyan :
                    customColor == "green" ? green :
                    customColor == "yellow" ? yellow : 
                    customColor == "red" ? red : 
                    noColor

    return(
      <Box color={"white"} pos={"relative"} rounded={"xl"} _hover={{filter: "auto", brightness: "0.7"}}
      w={"160px"} h={"260px"} className='font-link' bgImage={img} bgPosition={"center"} bgSize={"cover"}>
        <Box bg={customColor[0]} h={"8%"} display={"flex"} justifyContent={"space-between"} alignItems={"center"} px={1} roundedTop={"xl"} >
          <Box display={"flex"} alignItems={"center"} gap={1} px={1}>
            <FaFolderOpen size={10}/>
            <Text fontSize={"8px"} fontWeight={"700"} backdropBlur={"8px"}>{mapel}</Text>
          </Box>
          <Badge colorScheme={customColor[2]} variant={"solid"} letterSpacing={1}
          fontSize={"7px"} rounded={"lg"} color={"white"} justifySelf={"flex-end"} h={"fit-content"} >
            {jumlah} SOAL
          </Badge>
        </Box>
        <Flex position={"absolute"} bottom={0} flexDir={"column"} justifyContent={"center"} w="full" h={"38%"} textAlign={"center"}
        bgGradient={customColor[1]} roundedBottom={"xl"} backdropFilter='auto' backdropBlur='2px' fontWeight={600} gap={2}>
          <Text lineHeight={1.1}>
            {judul}
          </Text>
          
          <Text fontSize={"8px"}>{note}</Text>
        </Flex>
  
      </Box>
    )
    
  }

export default Mapel