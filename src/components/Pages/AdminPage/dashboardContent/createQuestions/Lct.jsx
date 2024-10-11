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
import { saveQuestion } from '../../../../../../lib/libs'


function Lct() {
    const {setCreateQuestion} = useContext(quizContext)
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()
    const [soal, setSoal] = useState("")
    const [jawaban, setJawaban] = useState("")
    const [poin, setPoin] = useState("")
    const [minusPoin, setMinusPoin] = useState("")
    const [waktu, setWaktu] = useState("99999")

    function handleSaveQuestion(){
        if(!soal || !jawaban || !poin || !minusPoin || !waktu){
            return false
        }else{
            const toastPromise = saveQuestion({
                idMapel: "blm buat",
                soal,
                jawaban,
                poin,
                minusPoin,
                waktu,
                metode: "lct"
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
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea} onChange={(e)=> setSoal(e.target.value)}/>
    </FormControl>
    <FormControl>
        <FormLabel>Gambaran Jawaban</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='gambaran jawaban' as={Textarea} onChange={(e)=> setJawaban(e.target.value)}/>
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

    <Text opacity={0.5} mt={5}>Jawaban benar/salah ditentukan oleh panitia</Text>

    <Flex gap={2} mt={3}>
        <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
        w={"full"} size={"md"} rounded={"full"} onClick={() => setCreateQuestion(false)}>
            Cancel
        </Button>
        <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
        w={"full"} size={"md"} rounded={"full"} onClick={handleSaveQuestion} isLoading={isLoading}>
            Save
        </Button>
    </Flex>
    </>
  )
}

export default Lct