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

import { saveSomething } from '../../../../lib/libs';

function Question({id_quest, idx, quest, answer, point, minus_point, method, time, id_subject}) {
    const {inAll} = useContext(quizContext)
    const [isEditing, setIsEditing] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const [newQuest, setNewQuest] = useState(quest)
    const [newScore, setNewScore] = useState(point)
    const [newTime, setNewTime] = useState(time)
    const [newAnswer, setNewAnswer] = useState(answer)
    const [pilganAns, setPilganAns] = useState(99)

    const checkPilganAnswer = answer.split("..**..")
    const isPilgan = checkPilganAnswer.length > 1 && method == "pilgan"

    useEffect(()=>{
        isPilgan && setPilganAns(Number(checkPilganAnswer[4]))
    }, [newAnswer])
    
    function handleOpt(e, ans){
        isEditing && setPilganAns(ans)
        setNewAnswer(checkPilganAnswer.splice(-1, 1, pilganAns))
    }

    function handleCancel(){
        setNewQuest(quest)
        setNewScore(point)
        setNewTime(time)
        setNewAnswer(answer)
        setIsEditing(false)
    }

    async function handleSaveEdit(){
        console.log(newQuest, newAnswer, newScore, newTime)
        await saveSomething(
            "/api/games/quest", "PUT", false,
            {
                id: id_quest,
                quest: newQuest,
                answer: newAnswer,
                point: newScore,
                time: newTime
            },
            setIsLoading, setIsEditing, ()=> {}
        )
    }

    return(
        <Box w={"full"} px={3} py={1} rounded={"xl"} boxShadow={"0 0 10px rgba(0,0,0, 0.2)"} pb={2}>
            <Flex justifyContent={"space-between"} w={"100%"} flexDir={"column"} gap={2}>
                <Flex gap={1} alignItems={"center"}>
                    <Text flexShrink={0}>{idx + 1}. {method}</Text>
                    <Flex justifyContent={inAll ? "end" : "space-between"} flexGrow={1}>
                        {isEditing && !inAll ?
                            <ButtonGroup>
                                <Button variant={"outline"} colorScheme={"red"}
                                size={"xs"} rounded={"lg"} onClick={handleCancel}>
                                    Cancel
                                </Button>
                                <Button variant={"outline"} colorScheme={"blue"}
                                size={"xs"} rounded={"lg"} onClick={handleSaveEdit} isLoading={isLoading}>
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
                                <Input type='tel' value={newScore} readOnly={!isEditing} onChange={(e) => setNewScore(e.target.value)}/>
                                <InputRightAddon>Poin</InputRightAddon>
                            </InputGroup>
                            <InputGroup size={"xs"} >
                                <Input type='tel' value={newTime} readOnly={!isEditing} onChange={(e) => setNewTime(e.target.value)}/>
                                <InputRightAddon>Detik</InputRightAddon>
                            </InputGroup>
                        </Flex>  
                    </Flex>
                </Flex>

                <Flex flexDir={"column"} gap={2}>
                    <Input fontSize={"sm"} variant={"flushed"} value={newQuest} rounded={"lg"}
                    as={Textarea} readOnly={!isEditing} onChange={(e) => setNewQuest(e.target.value)} p={2} px={4}/>
                    {isPilgan ?
                        <RadioGroup value={pilganAns} >
                            <Stack>
                                <Radio value={0} onClick={(e) => handleOpt(e, 0)}>{checkPilganAnswer[0]}</Radio>
                                <Radio value={1} onClick={(e) => handleOpt(e, 1)}>{checkPilganAnswer[1]}</Radio>
                                <Radio value={2} onClick={(e) => handleOpt(e, 2)}>{checkPilganAnswer[2]}</Radio>
                                <Radio value={3} onClick={(e) => handleOpt(e, 3)}>{checkPilganAnswer[3]}</Radio>
                            </Stack>
                        </RadioGroup>
                        :
                        <InputGroup gap={1} alignItems={"center"}>
                            <Text>Jawaban: </Text>
                            <Input fontSize={"sm"} variant={"flushed"} value={newAnswer} rounded={"lg"} readOnly={!isEditing}
                            onChange={(e) => setNewAnswer(e.target.value)} p={0} size={"xs"}/>
                        </InputGroup>
                    }
                </Flex>
            </Flex>
        </Box>
    )
}

export default Question