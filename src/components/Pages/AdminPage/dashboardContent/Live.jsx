import React, {createContext, useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { 
    Button,
    Flex,
    Box,
    Heading
 } from '@chakra-ui/react'

 import "./scrollbar.css"

 import { quizContext } from '../Dashboard'
 import Mapel from './Mapel'

function Live() {
    const {allMapel, selectedMapelId} = useContext(quizContext)
    const navigate = useNavigate()

    async function handleLive(){
        // send subject to database
        navigate("/quizinvitation", {state: {isAdmin: true, uuid:"admin"}})
    }

  return (
        <Flex gap={3} flexDir={"column"}>
            <Heading fontSize={"md"} opacity={0.6}>
                Pilih mata pelajaran yang akan di uji
            </Heading>
            <Flex flexWrap={"wrap"} gap={2} justifyContent={{base: "center", lg: "start"}} h={"60vh"} overflowY={"scroll"}>
                
                {allMapel.map((data, i) => {
                    return  (
                                <Mapel key={i}
                                id_subject={data.id_subject}
                                customColor={data.color} 
                                name={data.name}
                                totalQuestion={data.totalQuestion} 
                                title={data.title}
                                note={data.note} 
                                image={data.image}
                                fromLive={true}/>
                            )
                        
                  })}
            </Flex>
            
            <Button colorScheme='red' variant={"solid"} w={"50%"} mx={"auto"}  h={10} onClick={handleLive}>
                Start Live Quiz
            </Button>
        </Flex>
  )
}

export default Live