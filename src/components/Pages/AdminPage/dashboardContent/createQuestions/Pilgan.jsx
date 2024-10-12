import React, {useContext, useState, useEffect} from 'react'

import { 
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Button,
  useToast
} from '@chakra-ui/react'

import { quizContext } from '../../Dashboard'
import { saveSomething } from '../../../../../../lib/libs'


function Pilgan() {
  const {setCreateQuestion} = useContext(quizContext)
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)
    const [soal, setSoal] = useState("")
    const [opt, setOpt] = useState("")
    const [opt1, setOpt1] = useState("")
    const [opt2, setOpt2] = useState("")
    const [opt3, setOpt3] = useState("")
    const [opt4, setOpt4] = useState("")
    const [jawaban, setJawaban] = useState([])
    const [poin, setPoin] = useState("")
    const [minusPoin, setMinusPoin] = useState("")
    const [waktu, setWaktu] = useState("")

    useEffect(()=>{
      setJawaban([opt1, opt2, opt3, opt4, opt].join("..**.."))
    }, [opt, opt1, opt2, opt3, opt4])

    function handleSaveQuestion(){
        if(!soal || !poin || !minusPoin || !waktu || !opt ||!opt1 ||!opt2 ||!opt3 ||!opt4){
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
                metode: "pilgan"
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
    <Flex flexDir={"column"} gap={3} w={{base: "full", lg: "100%"}}>
        <FormControl>
          <FormLabel>Soal</FormLabel>
          <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea} onChange={(e)=> setSoal(e.target.value)}/>
        </FormControl>

        <Flex my={5} py={2} flexDir={"column"} gap={1} >
          <FormControl>
            <FormLabel>Option 1</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 1' onChange={(e)=> setOpt1(e.target.value)}/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 2</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 2' onChange={(e)=> setOpt2(e.target.value)}/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 3</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 3' onChange={(e)=> setOpt3(e.target.value)}/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 4</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 4' onChange={(e)=> setOpt4(e.target.value)}/>
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel>Jawaban</FormLabel>
          <Select placeholder='Option yang Benar' onChange={(e)=> setOpt(e.target.value)}>
            <option value={0}>Option 1</option>
            <option value={1}>Option 2</option>
            <option value={2}>Option 3</option>
            <option value={3}>Option 4</option>
          </Select>
        </FormControl>

        <Flex gap={2}>
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
    </Flex>
  )
}

export default Pilgan