import React, { useContext, useEffect, useState } from 'react'

import { 
    Flex, 
    Box,
    Button,
    Text,
    AbsoluteCenter,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure
   } from '@chakra-ui/react'

import CreateQuestion from './CreateQuestion';
import Question from '../Question';

import { IoIosAddCircleOutline } from "react-icons/io";

import { quizContext } from './../Dashboard'
import { idMapel } from './ShowMapel';

function ShowMapelDetail({comp, isOpen, onClose}) {
  const {setCreateQuestion, createQuestion, inAll, setInAll} = useContext(quizContext)
  const [allQuestions, setAllQuestions] = useState([])
  const {id_subject} = useContext(idMapel)

  useEffect(()=>{
    async function getAllQuestion(){
      const response = await fetch(import.meta.env.VITE_SERVER_URI + `/api/games/quest/subject/${id_subject}`)
      const data = await response.json()
      setAllQuestions(data.data)
    }
    getAllQuestion()
  },[createQuestion])
    
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"5xl"} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Soal Matematika</ModalHeader>
            <ModalCloseButton />
          <ModalBody>
            <Flex gap={2} flexDir={{base: "column", lg: "row"}}>
                <Box mx={{base: "auto", lg: "0"}}>
                    {comp}
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "column"}} w={"full"}>
                {!inAll ? <Button leftIcon={<IoIosAddCircleOutline size={15}/>} colorScheme='blue' variant={"outline"} mb={3} 
                rounded={"lg"} fontSize={"10px"} w={"120px"} mx={{base: "auto", lg: "0"}} size={"xs"} onClick={()=> setCreateQuestion(true)}>
                    <Text fontSize={"9px"}>Buat Pertanyaan</Text>
                </Button>: <span />}
                {createQuestion? <CreateQuestion setCreateQuestion={setCreateQuestion}/>:<span />}
                {/* question will be shown here no matter what */}
                <Flex flexDir={"column"} gap={4}>
                  { allQuestions.length > 0 &&
                    allQuestions.map((data, i) => <Question
                                                    key={i}
                                                    id_quest={data.id_quest}
                                                    quest={data.quest}
                                                    answer={data.answer}
                                                    point={data.point}
                                                    minus_point ={data.minus_point}
                                                    method={data.method}
                                                    time={data.time}
                                                    id_subject={id_subject}
                                                  />)
                  }
                </Flex>
                
                </Box>
            </Flex>
          </ModalBody>
          
        </ModalContent>
      </Modal>
  )
}

export default ShowMapelDetail