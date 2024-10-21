import React, { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { 
    Text, 
    Button,  
    Flex, 
    InputGroup,
    InputLeftElement,
    Input,
    Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
   } from '@chakra-ui/react';

import { CiSearch } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

import { osis } from '../../App';
import { isAuthFromDB } from '../../../lib/libs';
import Cookies from "js-cookie"

import "./home.css"

function Voting() {
    const {colorMode, setIsAuth} = useContext(osis)
    const [isOsis, setIsOsis] = useState(false)
    const navigate = useNavigate()

    let currentMatchIndex = -1;
    let matchElements = [];

    useEffect( ()=>{
      async function authFromDB(){
          const response = await isAuthFromDB(Cookies, import.meta.env.VITE_SERVER_URI + "/api/auth/auth")
          setIsAuth(response)

          const isOsis = Cookies.get("isOsis")
          if(isOsis == "true" && response){
              setIsOsis(true)
          }else{
              setIsOsis(false)
              navigate("/")
      }
      }
      authFromDB()
  }, [])

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
    <>
      {isOsis && 
        <Flex mt={20} pt={{base: 5, lg: 0}} pb={20} px={5} flexDir={"column"} alignItems={"center"} justifyContent={"center"} overflowX={"hidden"}>
          
          <InputGroup w={{base: "70%", lg: "50%"}} boxShadow={"0px 6px 15px -10px rgba(0,0,0,0.5)"} rounded={"lg"}>
            <InputLeftElement pointerEvents='none' display={"flex"} h={"full"} alignItems={"center"}>
              <CiSearch color='gray.400' size={25} />
            </InputLeftElement>
            <Input type="search"  placeholder='search' py={{base: 4, lg: 8}} px={2} onChange={findText}/>
          </InputGroup>

          <Text lineHeight={"250%"} textAlign={"center"} placeSelf={"center"} fontStyle={"italic"} fontWeight={{base: 600, lg: 500}} fontSize={{ base: "lg", lg:"2xl"}} className='roboto'>Voting</Text>
          <Text size={"sm"} className='roboto-' opacity={0.5}>Ayo Sampaikan Pendapatmu</Text>

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
            </Flex>
          </Flex>

          <Flex w={"full"} flexWrap={"wrap"} flexDir={{base: "column", md: "row"}} justifyContent={{base: "center", lg: "start"}} py={10} pt={5} gap={{base: 3, md: 3}}>

          </Flex>
        </Flex>
      }
    </>
    
    
  )
}

export default Voting