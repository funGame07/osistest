import React, { useState, useContext } from 'react'

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


function Isian() {
  const {setCreateQuestion} = useContext(quizContext)

  return (
    <Flex flexDir={"column"} gap={3} w={{base: "full", lg: "100%"}}>
        <FormControl>
          <FormLabel>Soal</FormLabel>
          <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea}/>
        </FormControl>

        <FormControl>
          <FormLabel>Jawaban</FormLabel>
          <Input type='text' size={"sm"} rounded={"xl"} placeholder='jawaban'/>
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

export default Isian