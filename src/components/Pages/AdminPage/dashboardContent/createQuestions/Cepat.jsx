import React, {useContext, useState} from 'react'

import { 
    Box,
    Flex,
    Heading,
    Text,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button
} from '@chakra-ui/react'

import { quizContext } from '../../Dashboard'
import { saveQuestion } from '../../../../../../lib/libs'


function Cepat() {
    const {setCreateQuestion} = useContext(quizContext)
    const [soal, setSoal] = useState("")
    const [jawaban, setJawaban] = useState("")
    const [poin, setPoin] = useState("")
    const [minusPoin, setMinusPoin] = useState("")
    const [waktu, setWaktu] = useState("")

    function handleSaveQuestion(){
        if(!soal || !jawaban || !poin || !minusPoin){
            return false
        }else{
            saveQuestion({
                idMapel: "blm buat",
                soal,
                jawaban,
                poin,
                kurangPoin,
                minusPoin,
                waktu,
                metode: "cepat"
            })
        }
    }
    
  return (
    <>
    <FormControl>
        <FormLabel>Soal</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea} onChange={(e) => setSoal(e.target.value)}/>
    </FormControl>

    <FormControl>
        <FormLabel>Jawaban</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='jawaban' onChange={(e) => setJawaban(e.target.value)}/>
    </FormControl>

    <Flex gap={2} mt={5}>
        <FormControl>
        <FormLabel>Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='poin' onChange={(e)=> setPoin(e.target.value)}/>
        </FormControl>
        <FormControl>
        <FormLabel>kurang Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='pengurangan poin' onChange={(e)=> setMinusPoin(e.target.value)}/>
        </FormControl>
    </Flex>

    <FormControl>
        <FormLabel>Waktu pengerjaan</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='waktu pengerjaan (detik)' onChange={(e)=> setWaktu(e.target.value)}/>
    </FormControl>

    <Flex gap={2} mt={3}>
        <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
        w={"full"} size={"md"} rounded={"full"} onClick={() => setCreateQuestion(false)}>
            Cancel
        </Button>
        <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
        w={"full"} size={"md"} rounded={"full"} onClick={handleSaveQuestion}>
            Save
        </Button>
    </Flex>
    </>

  )
}

export default Cepat