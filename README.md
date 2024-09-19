# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


import { Box, Circle, Image, Container, Flex, Text, Button } from '@chakra-ui/react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "./navbar.css"

function Navbar() {

  return (
    <Box display={"flex"}  p={4} px={10} bg={"#2a1c10"}>
        <Flex minH={"full"} minW={"full"} alignItems={"center"} gap={2}>
            <Image src='osis.png' borderRadius={"full"} maxW={16}/>
            <Flex flexDir={"column"} lineHeight={1} fontFamily={"fantasy"} letterSpacing={2} color={"white"}>
                <Text fontWeight={800} fontSize={"xl"}>OSIS</Text>
                <Text fontWeight={500} fontSize={"md"}>SMASSA</Text>
            </Flex>
            <Flex color={"white"} alignItems={"center"} gap={9} marginLeft={"auto"}
            justifyContent={"center"} fontWeight={500} fontSize={"lg"}>
                <Text display={{base: "none", md: "block"}}>
                    <Link to={"/"}>Home</Link>
                </Text>
                <Text display={{base: "none", md: "block"}}>
                    <Link to={"/games"}>Games</Link>
                </Text>
                <Text display={{base: "none", md: "block"}}>
                    <Link to={"/voting"}>Voting</Link>
                </Text>
                <Button display={"flex"}  gap={2} mx={{base: -5, md: 0, lg:5}} color={"#f8bd43"}
                bg={"transparent"} colorScheme='white' variant={"outline"}
                px={2} py={7} border={{base: "none"}}>
                    <Image src='image.png' border={"2px solid #fac848"} borderBottomEndRadius={"full"} borderStartRadius={"full"} maxW={10} maxH={10}/>
                    <Box lineHeight={1.2} display={{base: "none", sm: "block"}}>
                        <Text>Hai, Elbert</Text>
                        <Text fontSize={"sm"}>Welcome Back</Text>
                    </Box>
                    
                </Button>
                
            </Flex>
        </Flex>
    </Box>
  )
}

export default Navbar


<AbsoluteCenter minW={"80%"} maxW={"80%"} border={"1px solid black"} 
            rounded={"lg"} py={2} boxShadow={"dark-lg"} bg={"white"}
            display={open? "block" : "none"}>
              <Flex alignItems={"center"} gap={1}>
                <IoIosArrowBack size={"25px"} onClick={() => setOpen(false)}/>
                <Image src="logo.png" maxW={"20"}/>
              </Flex>
              <Box p={4} gap={2} display={"flex"} flexDir={"column"}>
                <Box h={"180px"} w={"100%"} bgImage={"school.png"} bgSize={"cover"} border={"1px solid gray"} rounded={"lg"}>
                </Box>
                <Flex alignItems={"center"} gap={2}>
                  <SlLocationPin size={20} />
                  <Text fontSize={"sm"} fontWeight={600}>Jl. Surabaya No. 19</Text>
                </Flex>
                <Text fontWeight={800}>Our School Web:</Text>
                <Button colorScheme='teal' leftIcon={<FaBusAlt />}>
                  <Link>
                    Goo!
                  </Link>
                  
                </Button>
              </Box>
            </AbsoluteCenter>