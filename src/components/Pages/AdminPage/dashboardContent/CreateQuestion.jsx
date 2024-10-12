import React, {useContext, useState, useEffect} from 'react'
import { 
    Box,
    Text,
    Button,
    Flex,
    Heading,
    Divider
 } from '@chakra-ui/react'
 import { osis } from '../../../../App'
 import Pilgan from './createQuestions/Pilgan';
 import Isian from './createQuestions/Isian';
 import Lct from './createQuestions/Lct';
 import Cepat from './createQuestions/Cepat';
 import Otomatis from './createQuestions/Otomatis';
 import Mapel from './Mapel';

function CreateQuestion({setCreateQuestion}){
    const [method, setMethod] = useState("")
    const {colorMode} = useContext(osis)
    const cardBg = colorMode =="light"? "white": "gray.700"
    
    function handleMethod(e){
      setMethod(e.target.value)
    }

    return (
      <Flex pb={5} pt={4} minW={"90%"} flexDir={{base: "column"}} gap={{base: 5}} pos={"relative"} alignItems={"center"} minH={"fit-content"} >
        
        <Flex bg={cardBg} w={{base: "100%", lg: "90%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
            <Flex p={4} flexDir={"column"} w={{lg: "50%"}}>
              <Heading fontSize={"2xl"}>Buat Pertanyaan</Heading>
              <Flex flexWrap={"wrap"} mt={3} gap={2}>
                <Button colorScheme='blue' variant={"outline"} size={"xs"} rounded={"lg"} onClick={handleMethod} value={"pilgan"}>
                  Pilihan Berganda
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"xs"} rounded={"lg"} onClick={handleMethod} value={"isian"}>
                  Isian
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"xs"} rounded={"lg"} onClick={handleMethod} value={"lct"}>
                  Pencet Tombol Tercepat
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"xs"} rounded={"lg"} onClick={handleMethod} value={"cepat"}>
                  Siapa Cepat Dia Dapat
                </Button>
                <Button colorScheme='blue' variant={"outline"} size={"xs"} rounded={"lg"} onClick={handleMethod} value={"otomatis"}>
                  Soal Otomatis (Khusus berhitung)
                </Button>
              </Flex>

            </Flex>
            <Divider orientation={{base:"horizontal", lg: "vertical"}}/>
            <Flex w={"full"} h={"full"} px={4} py={5} gap={2} flexDir={"column"}>

              {method == "pilgan" ? <Pilgan />:
                method == "isian" ? <Isian/> :
                method == "lct" ? <Lct /> : 
                method == "cepat" ? <Cepat /> : 
                method == "otomatis" ? <Otomatis /> : 
                <span/>}
            </Flex>
        </Flex>
      </Flex>
    )
}

export default CreateQuestion