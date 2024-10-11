import React, { useContext, useEffect } from 'react'

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

function ShowMapelDetail({comp, onOpen, isOpen, onClose}) {
  const {setCreateQuestion, createQuestion, inAll, setInAll} = useContext(quizContext)
    
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
                rounded={"full"} fontSize={"10px"} w={"120px"} mx={{base: "auto", lg: "0"}} size={"xs"} onClick={()=> setCreateQuestion(true)}>
                    <Text fontSize={"9px"}>Buat Pertanyaan</Text>
                </Button>: <span />}
                {createQuestion? <CreateQuestion setCreateQuestion={setCreateQuestion} />:<span />}
                {/* question will be shown here no matter what */}
                <Flex flexDir={"column"} gap={4}>
                  <Question />
                  <Question jawaban='55..**..77..**..11..**..99..**..1'/>
                </Flex>
                
                </Box>
            </Flex>
          </ModalBody>
          
        </ModalContent>
      </Modal>
  )
}

export default ShowMapelDetail