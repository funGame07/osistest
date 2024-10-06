import React, {useContext, useState} from 'react'
import { 
    Box,
    Text,
    Button,
    Flex,
    Heading,
    Divider
 } from '@chakra-ui/react'
 import { osis } from '../../../App'

function CreateQuestion({setCreateQuestion}){
    const {colorMode} = useContext(osis)
    const cardBg = colorMode =="light"? "white": "black"
    async function handleSave(){
  
    }
  
    return (
      <Flex pb={5} pt={4} minW={"90%"} flexDir={{base: "column"}} gap={{base: 5}} pos={"relative"} alignItems={"center"} minH={"fit-content"}>
        
        <Flex bg={cardBg} w={{base: "100%", lg: "90%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
            <Flex p={4} flexDir={"column"} w={{lg: "30%"}}>
              <Heading fontSize={"2xl"}>Buat Pertanyaan</Heading>
              <Flex flexWrap={"wrap"} mt={3} gap={2}>
                <Button colorScheme='blue' variant={"outline"} size={"sm"} rounded={"2xl"}>
                  Pilihan Berganda
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"sm"} rounded={"2xl"}>
                  Isian
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"sm"} rounded={"2xl"}>
                  Analisis
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"sm"} rounded={"2xl"}>
                  Soal Otomatis (Khusus berhitung)
                </Button>
              </Flex>
              
            </Flex>
            <Divider orientation={{base:"horizontal", lg: "vertical"}}/>
            <Flex w={"full"} h={"full"} px={4} py={5} gap={2}>
                <Button mt={5} bg={"teal.600"} colorScheme='teal.600' 
                color={"white"} w={"full"} rounded={"full"} onClick={()=> setCreateQuestion(false)}>Cancel</Button>
                <Button mt={5} bg={"teal.600"} colorScheme='teal.600' 
                color={"white"} w={"full"} rounded={"full"} onClick={handleSave}>Save</Button>
            </Flex>
        </Flex>
      </Flex>
    )
}

export default CreateQuestion