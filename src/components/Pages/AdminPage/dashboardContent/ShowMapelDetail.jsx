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
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
   } from '@chakra-ui/react'

import CreateQuestion from './CreateQuestion';

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
                <Box>
                    {comp}
                </Box>

                <Box display={"flex"} flexDir={{base: "column", lg: "row"}}>
                {!inAll ? <Button leftIcon={<IoIosAddCircleOutline size={15}/>} colorScheme='blue' variant={"outline"} mb={3} 
                rounded={"full"} fontSize={"10px"} size={"xs"} onClick={()=> setCreateQuestion(true)}>
                    <Text fontSize={"9px"}>Buat Pertanyaan</Text>
                </Button>: <span />}
                {createQuestion? <CreateQuestion setCreateQuestion={setCreateQuestion} />:<span />}
                {/* question will be shown here no matter what */}
                Question will be shown here
                </Box>
            </Flex>
          </ModalBody>
          
        </ModalContent>
      </Modal>
  )
}

export default ShowMapelDetail