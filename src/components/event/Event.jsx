// ### Import package from node_modules
import React, {useContext, useState} from 'react'

// ### Import icons from node_modules
import { LuRocket } from "react-icons/lu";
import { IoPeopleOutline, IoWarningOutline } from "react-icons/io5";
import { FaRegStar, FaRegThumbsUp } from "react-icons/fa6";
import { GoGift } from "react-icons/go";
import { TbNumber1Small, TbNumber2Small, TbNumber3Small } from "react-icons/tb";
import { BsFire } from "react-icons/bs";

// ### Import package from chakra ui
import { 
    Text,
    Flex,
    Image,
    Button,
    Box,
    Heading,
    Input,
    InputLeftElement,
    InputGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuOptionGroup,
    MenuItemOption,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    useDisclosure,
    InputLeftAddon
} from '@chakra-ui/react'

import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

// Import styles event
import "./event.css"

// import context osis from App.jsx
import { osis } from '../../App';

import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { PiNumpadLight } from "react-icons/pi";


function Event() {
    // Declaration Hooks
    const {colorMode} = useContext(osis)
    const cardBg = colorMode =="light"? "white": "black"
    const { isOpen, onToggle, onClose } = useDisclosure()
    const [registerName, setRegisterName] = useState(null)
    const [registerNis, setRegisterNis] = useState(null)
    const navigate = useNavigate()

    function handleRegister(){
        const nis = Cookies.get("nis")
        // if(nis !== registerNis){
        //     navigate("/login")
        // }
        navigate("/quizinvitation", {state: {isAdmin: false, nis: registerNis, name: registerName}})
    }


    let currentMatchIndex = -1;
    let matchElements = [];

    function findText(e) {
        clearHighlights();

        const searchInput = e.target.value.trim();
        if (!searchInput) {
            return;
        }

        const regex = new RegExp(searchInput, "gi");
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

        let node;
        while ((node = walker.nextNode())) {
            const matches = node.textContent.match(regex);
            if (matches) {
                const spanWrapper = document.createElement("span");
                spanWrapper.innerHTML = node.textContent.replace(regex, (match) => `<span class="highlight">${match}</span>`);
                node.parentNode.replaceChild(spanWrapper, node);
            }
        }

        matchElements = document.querySelectorAll("span.highlight");
        if (matchElements.length > 0) {
            currentMatchIndex = 0;
            scrollToMatch(currentMatchIndex);
        }
    }

    function clearHighlights() {
        const highlights = document.querySelectorAll("span.highlight");
        highlights.forEach((highlight) => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize(); // Merge adjacent text nodes
        });
    }

    function scrollToMatch(index) {
        if (matchElements.length > 0 && index >= 0 && index < matchElements.length) {
            matchElements[index].scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

  return (
    <Flex mt={20} pt={{base: 5, lg: 0}} pb={20} px={5} flexDir={"column"} alignItems={"center"} justifyContent={"center"} overflowX={"hidden"}>

    {/* <Flex px={2} pb={5} pt={8} flexDir={{base: "column"}} gap={{base: 5}} pos={"relative"} alignItems={"center"} minH={"fit-content"}> */}
        
      <InputGroup w={{base: "70%", lg: "50%"}} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} rounded={"lg"}>
        <InputLeftElement pointerEvents='none' display={"flex"} h={"full"} alignItems={"center"}>
          <CiSearch color='gray.400' size={25} />
        </InputLeftElement>
        <Input type="search"  placeholder='search' py={{base: 4, lg: 8}} px={2} onChange={findText}/>
        {/* <InputRightElement>
          <Button onClick={nextMatch}>Next</Button>
          <Button onClick={previousMatch}>Previous</Button>
        </InputRightElement> */}
      </InputGroup>
      <Text lineHeight={"250%"} textAlign={"center"} placeSelf={"center"} fontStyle={"italic"} fontWeight={{base: 600, lg: 500}} fontSize={{ base: "lg", lg:"2xl"}} className='roboto'>Event</Text>
      <Text size={"sm"} className='roboto-' opacity={0.5}>Jelajahi Event terkini kami</Text>

      <Flex w={"full"} alignItems={"center"} gap={2} mt={3}>
        <Flex >
          <Menu>
            <MenuButton as={Button} variant={"outline"} rightIcon={<IoChevronDownSharp />}>
              Filter
            </MenuButton>
            <MenuList>
            <MenuOptionGroup defaultValue='asc' type='radio'>
              <MenuItemOption value='asc'>Terbaru</MenuItemOption>
              <MenuItemOption value='desc'>Terlama</MenuItemOption>
            </MenuOptionGroup>
            </MenuList>
          </Menu>
        </Flex>
        
        
        <Flex gap={3} overflowX={"scroll"} w={"full"}>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Semua</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Event OSIS</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Event Sekolah</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Event Luar</Button>
        </Flex>
      </Flex>
        {/* <Text fontSize={{base: "3xl", lg: "3xl"}} fontWeight={900} letterSpacing={1} animation={`${fade} 5s linear infinite`}
        bgGradient={"linear(to-r, teal.700, teal, teal.700)"} bgClip={"text"} textShadow={"0 0 60px gray"} textAlign={"center"}
        >NEW EVENT IS BACK!!</Text> */}
    <Flex flexDir={"column"} w={"full"} alignItems={"center"} py={5}>
        <Flex bg={cardBg} maxW={{base: "98%", lg: "80%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}} >
            <Flex w={"fit-content"} alignItems={"center"}>
                <Image src="poster3.webp"  boxShadow={"dark-lg"} filter={"brightness(0.9)"}/>
            </Flex>
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

                <Box w={"full"} h={"full"} py={5}>
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

                <Popover
                    returnFocusOnClose={false}
                    isOpen={isOpen}
                    onClose={onClose}
                    placement='top'
                    closeOnBlur={false}
                >
                    <PopoverTrigger>
                        <Button bg={"teal.600"} colorScheme='teal.600' color={"white"} w={"full"} rounded={"full"} onClick={onToggle}>Ikuti Challenge</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                    <PopoverHeader fontWeight='semibold'>Confirmation</PopoverHeader>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody display={"flex"} flexDir={"column"} gap={3}>
                        <InputGroup size={"sm"}>
                            <InputLeftAddon>
                                <CiUser />
                            </InputLeftAddon>
                            <Input type='text' placeholder='Nama Kelompok' onChange={(e) => setRegisterName(e.target.value)}/>
                        </InputGroup>
                        <InputGroup size={"sm"}>
                            <InputLeftAddon>
                                <PiNumpadLight />
                            </InputLeftAddon>
                            <Input type='number' placeholder='Nis Kamu(bebas isi untuk testing aja)' onChange={(e)=> setRegisterNis(e.target.value)}/>
                        </InputGroup>
                        <Button onClick={handleRegister}>
                            Daftar
                        </Button>
                    </PopoverBody>
                    </PopoverContent>
                </Popover>
            </Box>
        </Flex>
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

export default Event


{/* <Flex bg={cardBg} w={{base: "97%", lg: "70%"}} rounded={"2xl"} overflow={"hidden"} h={"fit-content"} boxShadow={"lg"} flexDir={{base:"column", lg:"row"}}>
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
        </Flex> */}
