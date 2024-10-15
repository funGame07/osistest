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

function Question({id_quest, quest, answer, point, minus_point, method, time, id_subject}) {
    const {inAll} = useContext(quizContext)
    const [isEditing, setIsEditing] = useState(false)

    const [newQuest, setNewQuest] = useState(quest)
    const [newScore, setNewScore] = useState(point)
    const [newTime, setNewTime] = useState(time)
    const [newAnswer, setNewAnswer] = useState(answer)
    const [pilganAns, setPilganAns] = useState(99)

    const checkPilganAnswer = answer.split("..**..")
    const isPilgan = checkPilganAnswer.length > 1 && method == "pilgan"

    useEffect(()=>{
        isPilgan && setPilganAns(Number(checkPilganAnswer[4]))
    }, [])
    

    async function handleSaveEdit(){
        // update question
    }

    return(
        <Box w={"full"} px={3} py={1} rounded={"xl"} boxShadow={"0 0 10px rgba(0,0,0, 0.2)"} pb={2}>
            <Flex justifyContent={"space-between"} w={"100%"} flexDir={"column"} gap={2}>
                <Flex gap={1} alignItems={"center"}>
                    <Text>{id_quest}.</Text>
                    <Flex justifyContent={inAll ? "end" : "space-between"} flexGrow={1}>
                        {isEditing && !inAll ?
                            <ButtonGroup>
                                <Button variant={"outline"} colorScheme={"red"}
                                size={"xs"} rounded={"lg"} onClick={()=> setIsEditing(false)}>
                                    Cancel
                                </Button>
                                <Button variant={"outline"} colorScheme={"blue"}
                                size={"xs"} rounded={"lg"} onClick={handleSaveEdit}>
                                    Update
                                </Button>
                            </ButtonGroup>
                            :
                            <Button variant={"outline"} colorScheme={"blue"} leftIcon={<CiEdit/>}
                            size={"xs"} rounded={"lg"} onClick={() => setIsEditing(true)} display={inAll? "none" : "block"}>
                                Edit
                            </Button>
                        }
                        <Flex w={{base: "70%", lg: "30%"}}>
                            <InputGroup size={"xs"}>
                                <Input type='tel' value={point} readOnly={!isEditing} onChange={(e) => setNewScore(e.target.value)}/>
                                <InputRightAddon>Poin</InputRightAddon>
                            </InputGroup>
                            <InputGroup size={"xs"} >
                                <Input type='tel' value={time} readOnly={!isEditing} onChange={(e) => setNewTime(e.target.value)}/>
                                <InputRightAddon>Detik</InputRightAddon>
                            </InputGroup>
                        </Flex>  
                    </Flex>
                </Flex>

                <Flex flexDir={"column"} gap={2}>
                    <Input fontSize={"sm"} variant={"flushed"} value={quest} rounded={"lg"}
                    as={Textarea} readOnly={!isEditing} onChange={(e) => setNewQuest(e.target.value)} p={2} px={4}/>
                    {isPilgan ?
                        <RadioGroup value={pilganAns} readOnly={!isEditing}>
                            <Stack>
                                <Radio value={0} onClick={() => setPilganAns(0)}>{checkPilganAnswer[0]}</Radio>
                                <Radio value={1} onClick={() => setPilganAns(1)}>{checkPilganAnswer[1]}</Radio>
                                <Radio value={2} onClick={() => setPilganAns(2)}>{checkPilganAnswer[2]}</Radio>
                                <Radio value={3} onClick={() => setPilganAns(3)}>{checkPilganAnswer[3]}</Radio>
                            </Stack>
                        </RadioGroup>
                        :
                        <InputGroup gap={1} alignItems={"center"}>
                            <Text>Jawaban: </Text>
                            <Input fontSize={"sm"} variant={"flushed"} value={answer} rounded={"lg"} readOnly={!isEditing}
                            onChange={(e) => setNewQuest(e.target.value)} p={0} size={"xs"}/>
                        </InputGroup>
                    }
                </Flex>
            </Flex>
        </Box>
    )
}

export default Question