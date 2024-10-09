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
    Button
} from '@chakra-ui/react'

import { quizContext } from '../../Dashboard'


function Cepat() {
    const {setCreateQuestion} = useContext(quizContext)
    
  return (
    <>
    <FormControl>
        <FormLabel>Soal</FormLabel>
        <Input type='text' size={"sm"} rounded={"xl"} placeholder='soal' as={Textarea}/>
    </FormControl>

    <Flex gap={2} mt={5}>
        <FormControl>
        <FormLabel>Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='poin'/>
        </FormControl>
        <FormControl>
        <FormLabel>kurang Poin</FormLabel>
        <Input type='number' size={"sm"} rounded={"xl"} placeholder='pengurangan poin'/>
        </FormControl>
    </Flex>

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
    </>

  )
}

export default Cepat