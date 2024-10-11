import React, {useEffect, useState, useContext} from 'react'
import {
    useDisclosure,
    Button,
    Flex,
    ButtonGroup,
    Input,
    FormLabel,
    Box,
    Divider,
    Text,
    Textarea,
    InputRightAddon,
    InputRightElement,
    InputGroup,
    RadioGroup,
    Radio,
    Stack
  } from '@chakra-ui/react'
  import { IoIosAddCircleOutline } from "react-icons/io";
  import { CiEdit } from "react-icons/ci";

import { quizContext } from './Dashboard';

function Question({jawaban="tiga puluh 1"}) {
    const {inAll} = useContext(quizContext)
    const [isEditing, setIsEditing] = useState(false)
    const [question, setQuestion] = useState("Jika 1+1 = 2, maka f(x)=...")
    const [total, setTotal] = useState("20")
    const [time, setTime] = useState("20")
    const [ans, setAns] = useState("99")
    const [pilganAns, setPilganAns] = useState(99)

    const answer = jawaban.split("..**..")
    const isPilgan = answer.length > 1

    useEffect(()=>{
        isPilgan && setPilganAns(Number(answer[4]))
    }, [])
    

    async function handleSaveEdit(){
        // update question
    }

    return(
        <Box w={"full"} px={3} py={1} rounded={"xl"} boxShadow={"0 0 10px rgba(0,0,0, 0.2)"} pb={2}>
            <Flex justifyContent={"space-between"} w={"100%"} flexDir={"column"} gap={2}>
                <Flex gap={1} alignItems={"center"}>
                    <Text>1.</Text>
                    <Flex justifyContent={inAll ? "end" : "space-between"} flexGrow={1}>
                        {isEditing && !inAll ?
                            <ButtonGroup>
                                <Button variant={"outline"} colorScheme={"red"}
                                size={"xs"} rounded={"full"} onClick={()=> setIsEditing(false)}>
                                    Cancel
                                </Button>
                                <Button variant={"outline"} colorScheme={"blue"}
                                size={"xs"} rounded={"full"} onClick={handleSaveEdit}>
                                    Update
                                </Button>
                            </ButtonGroup>
                            :
                            <Button variant={"outline"} colorScheme={"blue"} leftIcon={<CiEdit/>}
                            size={"xs"} rounded={"full"} onClick={() => setIsEditing(true)} display={inAll? "none" : "block"}>
                                Edit
                            </Button>
                        }
                        <Flex w={{base: "70%", lg: "30%"}}>
                            <InputGroup size={"xs"}>
                                <Input type='tel' value={total} readOnly={!isEditing} onChange={(e) => setTotal(e.target.value)}/>
                                <InputRightAddon>Poin</InputRightAddon>
                            </InputGroup>
                            <InputGroup size={"xs"} >
                                <Input type='tel' value={time} readOnly={!isEditing} onChange={(e) => setTime(e.target.value)}/>
                                <InputRightAddon>Detik</InputRightAddon>
                            </InputGroup>
                        </Flex>  
                    </Flex>
                </Flex>

                <Flex flexDir={"column"} gap={2}>
                    <Input fontSize={"sm"} variant={"flushed"} value={question} rounded={"lg"}
                    as={Textarea} readOnly={!isEditing} onChange={(e) => setQuestion(e.target.value)} p={2} px={4}/>
                    {isPilgan ?
                        <RadioGroup value={pilganAns} readOnly={!isEditing}>
                            <Stack>
                                <Radio value={0} onClick={() => setPilganAns(0)}>{answer[0]}</Radio>
                                <Radio value={1} onClick={() => setPilganAns(1)}>{answer[1]}</Radio>
                                <Radio value={2} onClick={() => setPilganAns(2)}>{answer[2]}</Radio>
                                <Radio value={3} onClick={() => setPilganAns(3)}>{answer[3]}</Radio>
                            </Stack>
                        </RadioGroup>
                        :
                        <InputGroup gap={1} alignItems={"center"}>
                            <Text>Jawaban: </Text>
                            <Input fontSize={"sm"} variant={"flushed"} value={ans} rounded={"lg"} readOnly={!isEditing}
                            onChange={(e) => setQuestion(e.target.value)} p={0} size={"xs"}/>
                        </InputGroup>
                    }
                </Flex>
            </Flex>
        </Box>
    )
}

export default Question