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
    Button,
    useToast
} from '@chakra-ui/react'

import { quizContext } from '../../Dashboard'
import { saveSomething } from '../../../../../../lib/libs'


function Cepat() {
    const {setCreateQuestion} = useContext(quizContext)
    const toast = useToast()
    const [isLoading, setIsLoading] = useState(false)
    const [soal, setSoal] = useState("")
    const [jawaban, setJawaban] = useState("")
    const [poin, setPoin] = useState("")
    const [minusPoin, setMinusPoin] = useState("")
    const [waktu, setWaktu] = useState("")

    function handleSaveQuestion(){
        if(!soal || !jawaban || !poin || !minusPoin || !waktu){
            return toast({
                title: "Warning",
                status: "warning",
                description: "Seluruh kolom harus diisi",
                isClosable: true,
                position: "top"
              })
        }else{
            const toastPromise = saveSomething(
            "",
            {
                idMapel: "blm buat",
                soal,
                jawaban,
                poin,
                minusPoin,
                waktu,
                metode: "cepat"
            }, setIsLoading, setCreateQuestion)

            toast.promise(toastPromise, {
                success: value => ({ 
                  title: 'Success', 
                  description: value,
                  isClosable: true,
                  position: 'top',
                  containerStyle: {
                    zIndex: 9999
                  },
                  duration: 2000
                }),
                error: value => ({ 
                  title: 'Oops!', 
                  description: value,
                  isClosable: true,
                  position: 'top',
                  containerStyle: {
                    zIndex: 9999
                  },
                  duration: 2000
                }),
                loading: { title: 'Loading', description: "Tunggu sebentar", position: "top", isClosable: true},
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
        <Button className="font-link" variant={"outline"} colorScheme={"red"} 
        w={"full"} size={"sm"} rounded={"lg"} onClick={() => setCreateQuestion(false)}>
            Cancel
        </Button>
        <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
        w={"full"} size={"sm"} rounded={"lg"} onClick={handleSaveQuestion} isLoading={isLoading}>
            Save
        </Button>
    </Flex>
    </>

  )
}

export default Cepat