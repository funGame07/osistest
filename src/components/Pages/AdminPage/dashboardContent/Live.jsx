import React, {useContext, useState} from 'react'

import { 
    Button,
    Flex,
    Box,
    Heading
 } from '@chakra-ui/react'

 import { quizContext } from '../Dashboard'
 import Mapel from './Mapel'

function Live() {
    const {allMapel} = useContext(quizContext)

  return (
    <Flex gap={3} flexDir={"column"}>
            <Heading fontSize={"md"} opacity={0.6}>
                Pilih mata pelajaran yang akan di uji
            </Heading>
            <Flex flexWrap={"wrap"} gap={5} justifyContent={{base: "center", lg: "start"}}>
                {allMapel.map((data, i) => {
                    //CHANGE THIS
                    return  (
                                <Mapel key={i}
                                customColor="cyan" 
                                mapel="MATEMATIKA" 
                                jumlah="10" 
                                judul="BEGINNER MTK QUIZ" 
                                note=" salah 1 denda 5000" 
                                img="quizbg3.png"
                                fromLive={true}/>
                            )
                        
                  })}
            </Flex>
            
            <Button colorScheme='red' variant={"solid"} w={"full"} size={{base: "md", g: "xl"}}>
                Start Live Quiz
            </Button>
    </Flex>
  )
}

export default Live