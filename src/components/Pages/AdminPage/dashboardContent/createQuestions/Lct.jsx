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
import { idMapel } from '../ShowMapel'


function Lct() {
    const {id_subject} = useContext(idMapel)
    const {setCreateQuestion} = useContext(quizContext)
    const [isLoading, setIsLoading] = useState(false)
    const toast = useToast()

    const [quest, setQuest] = useState("")
    const [answer, setAnswer] = useState("")
    const [point, setPoint] = useState("")
    const [minusPoint, setMinusPoint] = useState("")
    const [time, setTime] = useState("999999999")

    function handleSaveQuestion(){
        if(!quest || !answer || !point || !minusPoint || !time){
            return toast({
                title: "Warning",
                status: "warning",
                description: "Seluruh kolom harus diisi",
                isClosable: true,
                position: "top"
              })
        }else{
            const toastPromise = saveSomething(
            "/api/games/quest", "POST", false,
            {
              id_subject,
              quest,
              answer,
              point,
              minus_point: minusPoint,
              time,
              method: "isian"
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
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea} onChange={(e)=> setQuest(e.target.value)}/>
    </FormControl>
    <FormControl>
        <FormLabel>Gambaran Jawaban</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='gambaran jawaban' as={Textarea} onChange={(e)=> setAnswer(e.target.value)}/>
    </FormControl>

    <Flex gap={2} mt={5}>
        <FormControl>
        <FormLabel>Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='poin' onChange={(e)=> setPoint(e.target.value)}/>
        </FormControl>
        <FormControl>
        <FormLabel>kurang Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='pengurangan poin' onChange={(e)=> setMinusPoint(e.target.value)}/>
        </FormControl>
    </Flex>

    <Text opacity={0.5} mt={5}>Jawaban benar/salah ditentukan oleh panitia</Text>

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

export default Lct