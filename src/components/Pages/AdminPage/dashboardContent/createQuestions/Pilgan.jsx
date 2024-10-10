import React, {useContext} from 'react'

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
  Button
} from '@chakra-ui/react'

import { quizContext } from '../../Dashboard'


function Pilgan() {
  const {setCreateQuestion} = useContext(quizContext)

  return (
    <Flex flexDir={"column"} gap={3} w={{base: "full", lg: "100%"}}>
        <FormControl>
          <FormLabel>Soal</FormLabel>
          <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea}/>
        </FormControl>

        <Flex my={5} py={2} flexDir={"column"} gap={1} >
          <FormControl>
            <FormLabel>Option 1</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 1'/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 2</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 2'/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 3</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 3'/>
          </FormControl>
          <FormControl>
            <FormLabel>Option 4</FormLabel>
            <Input type='text' size={"sm"} rounded={"xl"} placeholder='option 4'/>
          </FormControl>
        </Flex>

        <FormControl>
          <FormLabel>Jawaban</FormLabel>
          <Select placeholder='Option yang Benar'>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </Select>
        </FormControl>

        <Flex gap={2}>
          <FormControl>
            <FormLabel>Poin</FormLabel>
            <Input type='number' size={"sm"} rounded={"xl"} placeholder='poin'/>
          </FormControl>
          <FormControl>
          <FormLabel>kurang Poin</FormLabel>
            <Input type='number' size={"sm"} rounded={"xl"} placeholder='pengurangan poin'/>
          </FormControl>
        </Flex>
        
        <FormControl>
          <FormLabel>Waktu pengerjaan</FormLabel>
          <Input type='text' size={"sm"} rounded={"xl"} placeholder='waktu pengerjaan (detik)'/>
        </FormControl>

        <Flex gap={2} mt={3}>
          <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
          w={"full"} size={"md"} rounded={"full"} onClick={() => setCreateQuestion(false)}>
              Cancel
          </Button>
          <Button className="font-link" variant={"outline"} colorScheme={"blue"} 
          w={"full"} size={"md"} rounded={"full"} >
              Save
          </Button>
        </Flex>
    </Flex>
  )
}

export default Pilgan