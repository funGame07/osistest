// ### Import package from node_modules
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';

// ### Import package from chakra ui
import {
    Box,
    Button,
    Image,
    Flex,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalBody,
  } from '@chakra-ui/react'

// ### Import icons from node_modules
import { IoIosArrowBack } from "react-icons/io";
import { SlLocationPin } from "react-icons/sl";
import { FaBusAlt } from "react-icons/fa";

// import osis context from App.jsx
import { osis } from '../../App';

function VisitModal({isOpen, onOpen, onClose}){
  // Declaration Hooks
  const {colorMode} = useContext(osis) 

    return (
          <>
            <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose} isCentered size={"sm"}>
              <ModalOverlay />
              <ModalContent>
                <Flex alignItems={"center"} gap={1} p={2}>
                  <IoIosArrowBack size={"25px"} onClick={onClose} cursor={"pointer"}/>
                  <Image src={colorMode == "light" ? "logoosis-black.webp" : "logoosis-white.webp"} maxW={"20"}/>
                </Flex>
                <ModalBody display={"flex"} flexDir={"column"} gap={2}>
                <Box h={"180px"} w={"100%"} bgImage={"school.webp"} bgSize={"cover"} border={"1px solid gray"} rounded={"lg"}>
                </Box>
                  <Flex alignItems={"center"} gap={2}>
                    <SlLocationPin size={20} />
                    <Text fontSize={"sm"} fontWeight={700}>Jl. Surabaya No. 19, Pematangsiantar</Text>
                  </Flex>
                </ModalBody>
      
                <ModalFooter display={"flex"} flexDir={"column"} alignItems={"start"} gap={1}>
                  <Text fontWeight={800}>Website Sultan Agung</Text>
                  <Button colorScheme='teal' leftIcon={<FaBusAlt />} minW={"100%"}>
                    <Link>
                      Goo!
                    </Link>
                    
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
    )
}

export default VisitModal


