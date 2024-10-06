import React, {useContext} from 'react'
import { 
    Text,
    Flex,
    AspectRatio,
    Image,
    Button,
    Box,
    keyframes,
    Heading
} from '@chakra-ui/react'
import { LuRocket } from "react-icons/lu";
import { IoPeopleOutline, IoWarningOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import { TbNumber1Small, TbNumber2Small, TbNumber3Small } from "react-icons/tb";
import { BsFire } from "react-icons/bs";
import { FaRegThumbsUp } from "react-icons/fa6";

import "./event.css"
import { FcRules } from "react-icons/fc";
import { osis } from '../../App';


function YesEvent() {
    const fade = keyframes`
    0%{
        opacity: 1
    }
    50%{
        opacity: 0.4
    }
    100%{
        opacity: 1
    }
    `
    const {colorMode} = useContext(osis)
    const cardBg = colorMode =="light"? "white": "black"

  return (
    <Flex px={2} pb={5} pt={8} flexDir={{base: "column"}} gap={{base: 5}} pos={"relative"} alignItems={"center"} minH={"fit-content"}>
        <Text fontSize={{base: "3xl", lg: "3xl"}} fontWeight={900} letterSpacing={1} animation={`${fade} 5s linear infinite`}
        bgGradient={"linear(to-r, teal.700, teal, teal.700)"} bgClip={"text"} textShadow={"0 0 60px gray"} textAlign={"center"}
        >NEW EVENT IS BACK!!</Text>
        <Flex bg={cardBg} w={{base: "97%", lg: "70%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
            <AspectRatio ratio={3/4} w={{base: "full", lg: "50%"}}>
                <Image src="poster3.png"  boxShadow={"dark-lg"} filter={"brightness(0.9)"}/>
            </AspectRatio>
            <Box w={"full"} h={"full"} px={4} py={5}>
                <Text fontSize={"sm"} color={"teal"} fontWeight={800}>ONE DAY CHALLENGE</Text>
                <Heading fontWeight={900}>Creative Badass Challenge</Heading>
                <Text opacity={0.5} fontWeight={700} mt={2}>Change the way you live in just one month</Text>
                <Flex  alignItems={"center"} gap={2} mt={3}>
                    <LuRocket className='icon-teal' size={25}/> 
                    <Text fontSize={"xl"} fontWeight={800}>Rules</Text>
                </Flex>
                <Box flexBasis={0}>
                    <Rule text={'Anggota OSIS tidak boleh berpartisipasi'} icon={<IoPeopleOutline className='icon-yellow' size={20}/>}/>
                    <Rule text={'Dipilih 3 orang tiap kelas'} icon={<IoPeopleOutline className='icon-yellow' size={20}/>}/>
                    <Rule text={'Tiap tim mempersiapkan ketua'} icon={<FaRegStar className='icon-yellow' size={20}/>}/>
                    <Rule text={'Dilarang bermain curang :v'} icon={<IoWarningOutline className='icon-yellow' size={20}/>}/>
                    <Rule text={'Hadiah diberikan kepada juara 1 2 3 saja'} icon={<FaRegStar className='icon-yellow' size={20}/>}/>
                </Box>
                <Button mt={5} bg={"teal.600"} colorScheme='teal.600' color={"white"} w={"full"} rounded={"full"}>Ikuti Challenge</Button>
            </Box>
        </Flex>

        <Flex bg={cardBg} w={{base: "97%", lg: "70%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
            
            <Box w={"full"} h={"full"} px={4} py={5}>
                <Text fontSize={"sm"} color={"teal"} fontWeight={800}>ONE DAY CHALLENGE</Text>
                <Heading fontWeight={900}>Creative Badass Challenge</Heading>
                <Text opacity={0.5} fontWeight={700} mt={2}>Change the way you live in just one month</Text>
                <Flex  alignItems={"center"} gap={2} mt={3}>
                    <GoGift className='icon-teal' size={25}/> 
                    <Text fontSize={"xl"} fontWeight={800}>Hadiah</Text>
                </Flex>
                <Box flexBasis={0}>
                    <Rule text={'Piala + Rp. 30.000.000'} icon={<TbNumber1Small className='icon-yellow' size={30}/>}/>
                    <Rule text={'Piala + Rp. 20.000.000'} icon={<TbNumber2Small className='icon-yellow' size={30}/>}/>
                    <Rule text={'Piala + Rp. 10.000.000'} icon={<TbNumber3Small className='icon-yellow' size={30}/>}/>
                </Box>
                <Flex mt={4} gap={2}>
                    <Button leftIcon={<BsFire className='icon-red'/>} flexGrow={1} border={"1px solid gray"} rounded={"xl"}>
                        12
                    </Button>
                    <Button leftIcon={<FaRegThumbsUp className='icon-red'/>} flexGrow={1} border={"1px solid gray"} rounded={"xl"}>
                        34
                    </Button>
                </Flex>
            </Box>
        </Flex>
    </Flex>
  )
}

function Rule({text, icon}){
    return(
        <Flex alignItems={"center"} gap={2} mt={3}>
            {icon}
            <Text fontSize={"sm"} fontWeight={600}>{text}</Text>
        </Flex>
    )
}

export default YesEvent

