import React, { useContext } from 'react'

import { 
    Box, 
    VStack, 
    Image, 
    Text, 
    Button, 
    Link, 
    Flex, 
    Heading, 
    AspectRatio, 
    AbsoluteCenter,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    StackDivider,
    List,
    ListItem,
    InputGroup,
    InputLeftElement,
    InputRightElement,
    Input,
    Tabs, TabList, TabPanels, Tab, TabPanel,
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
   } from '@chakra-ui/react';

import { HiOutlineSparkles } from "react-icons/hi2";

import { CiSearch } from "react-icons/ci";
import { RxDividerVertical } from "react-icons/rx";
import { IoMdCheckboxOutline } from "react-icons/io";
import { MdSettings } from "react-icons/md";
import { IoChevronDownSharp } from "react-icons/io5";

import { osis } from '../../App';

import "./home.css"

function Explore() {
    const {colorMode} = useContext(osis)

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

// function nextMatch() {
//     if (matchElements.length > 0) {
//         currentMatchIndex = (currentMatchIndex + 1) % matchElements.length;
//         scrollToMatch(currentMatchIndex);
//     }
// }

// function previousMatch() {
//     if (matchElements.length > 0) {
//         currentMatchIndex = (currentMatchIndex - 1 + matchElements.length) % matchElements.length;
//         scrollToMatch(currentMatchIndex);
//     }
// }

  return (
    <Flex mt={20} pt={{base: 5, lg: 0}} pb={20} px={5} flexDir={"column"} alignItems={"center"} justifyContent={"center"} overflowX={"hidden"}>
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
      <Text lineHeight={"250%"} textAlign={"center"} placeSelf={"center"} fontStyle={"italic"} fontWeight={{base: 600, lg: 500}} fontSize={{ base: "lg", lg:"2xl"}} className='roboto'>Explore</Text>
      <Text size={"sm"} className='roboto-' opacity={0.5}>Jelajahi kegiatan terkini kami</Text>

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
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Prestasi</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Dokumentasi</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Daftar Kegiatan</Button>
            <Button size={"sm"} variant={"outline"} w={"fit-content"} px={{base:"4em", lg: 5}}>Daily</Button>
        </Flex>
      </Flex>

      <Flex w={"full"} flexWrap={"wrap"} flexDir={{base: "column", md: "row"}} justifyContent={{base: "center", lg: "start"}} py={10} pt={5} gap={{base: 3, md: 3}}>
        <CardExplore img={"quizbg1.webp"}/>
        <CardExplore img={"quizbg2.webp"}/>
        <CardExplore img={"quizbg3.webp"}/>
        <CardExplore img={"quizbg1.webp"}/>
        <CardExplore img={"quizbg2.webp"}/>
        <CardExplore img={"quizbg3.webp"}/>
 
 
      </Flex>
      


        <Accordion display={"flex"} flexDir={"column"} gap={1} w={"95%"} allowToggle>
          <AccordionItem >
            <h2>
              <AccordionButton as={Button}>
                <Heading fontSize={{base:"md", lg: "xl"}} textAlign={"center"} className='font-link'>
                    DAFTAR RENCANA TAHUN 2024.2025
                </Heading>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Flex w={{base:"100%", lg: "40%"}} minH={{base: "fit-content", lg:"full"}} placeSelf={"center"} flexDir={{base: "column", lg: "row"}} display={{base: "block", lg:"block"}} rounded={"2xl"} p={4}
                boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} mt={{base: 10, lg: 0}}>
                    <Heading textAlign={"center"} fontSize={"2xl"}>DAFTAR RENCANA TAHUN 2024.2025</Heading>
                    <Division text={""} colorMode={colorMode} pt={0} ptlg={'1em'}/>
                    <List spacing={3}>
                        
                        <ListKegiatan text={"Pemilihan Ketua Osis"}date={"1/22/2024"} /> 
                        <ListKegiatan text={"Pelantikan Ketua OSIS"} date={"2/12/2024"} />
                        <ListKegiatan text={"Lomba 17 Agustus"} date={"5/20/2024"} />
                        <ListKegiatan text={"Batik Day"} date={"7/21/2024"} />
                        <ListKegiatan text={"OSIS Cup"} date={"9/20/2024"} />
                        <ListKegiatan text={"Traktir siswa makan"} date={"10/9/2024"} />
                        <ListKegiatan text={"Traktir siswa makan"} date={"10/10/2024"} />
                        <ListKegiatan text={"Pentas seni bertema kebebasan"} date={"10/11/2024"} />
                        <ListKegiatan text={"Pesta merayakan natal"} date={"11/17/2024"} />
                        <ListKegiatan text={"Bagi-bagi duit 100.000.000"} date={"1/1/2025"} />
                    </List>
                </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
    </Flex>
  )
}

function ListKegiatan({text, date}){
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    
    let now = new Date()
    const pastDate = new Date(date)
    const dateToDisplay = pastDate.toLocaleDateString('in-IN', options)
  
    now = now.toLocaleDateString("en-EN", options)
    date = pastDate.toLocaleDateString('en-EN', options)
    const isOnTask = now == date
    const isCompleted = (new Date(now)).getTime() >= (new Date(date)).getTime()
  
    return(
      <Flex alignItems={"center"} justifyContent={"space-between"} fontSize={"md"}>
        <Flex alignItems={"center"} gap={2} w={"60%"}>
          <Box as={isCompleted ? isOnTask? GoDotFill : IoMdCheckboxOutline : MdSettings} color={isCompleted? isOnTask? "yellow.500" : "green.500" : "gray.600"}/>
          <ListItem>{isCompleted ? isOnTask? text : <s>{text}</s> : text}</ListItem>
        </Flex>
        <RxDividerVertical opacity={0.3} size={20}/>
        <Box w={"40%"}>
          <Text textAlign={"start"}> {isCompleted ? isOnTask? dateToDisplay : <s>{dateToDisplay}</s> : dateToDisplay}</Text>
        </Box>
          
      </Flex>
    )
  }

  function Division({text, colorMode, pt=7, ptlg="5em"}){
    return (
      <Flex alignItems={"center"} pos={"relative"} minW={"full"} gap={4} px={4} py={3} pt={{base: pt, lg: ptlg}}>
        <Box flexGrow={1} bg={colorMode == "light" ? "#241a0e" : "gray.100"}>
          <StackDivider borderColor='gray.200' width={"full"} minH={"2px"}/>
        </Box>
        <Text className="font-link" fontSize={{base: "lg", lg:"sm"}} fontWeight={700}>{text}</Text>
        <Box flexGrow={1} bg={colorMode == "light" ? "#241a0e" : "gray.100"}>
          <StackDivider borderColor='gray.200' width={"full"} minH={"2px"}/>
        </Box>
      </Flex>
    )
  }
function CardExplore({img}){
  return(
    <Flex w={{base: "full", lg: "24%"}} h={"fit-content"} flexDir={"column"} justifyContent={"center"} boxShadow={"0px 1px 15px -10px rgba(0,0,0,0.5)"}>
      <Flex pos={"relative"} w={"full"} justifyContent={"center"} borderBottom={"1px solid rgba(0,0,0,0.5)"}>
        <Image src={img} roundedTop={"xl"}/>
      </Flex>
      <Heading fontSize={"3xl"} fontWeight={600} px={2} letterSpacing={-0.5} lineHeight={"150%"}>
        Congratulations
      </Heading>
      <Text fontSize={"sm"} textIndent={10} className='roboto-flex' opacity={0.5} fontWeight={700} textAlign={"justify"} px={2}>
        Congratulations on your incredible achievement! Your hard work, dedication, and perseverance have truly paid off. 
        This accomplishment is a testament to your talent and abilities. We're so proud of everything you've achieved.
      </Text>
      <Text fontSize={"xs"} lineHeight={2} className='roboto-flex' opacity={0.3} fontWeight={700} textAlign={"justify"} px={2}>
        - 17 Januari 2023
      </Text>
    </Flex>
  )
}
  

export default Explore