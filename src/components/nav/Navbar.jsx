import { 
    Box, 
    Image, 
    Flex, 
    Text, 
    Button,
    useDisclosure,
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverTrigger,
    useToast
} from '@chakra-ui/react'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'
import "./navbar.css"
import { FiMoon, FiSun } from "react-icons/fi";
import { RxDividerVertical } from "react-icons/rx";
import { MdOutlinePushPin } from "react-icons/md";
import { RxEnterFullScreen, RxExitFullScreen } from "react-icons/rx";
import { useState, useContext, useEffect } from 'react';
import Modals from '../modal/VisitModal';
import { osis } from '../../App'



function Navbar() { 
    const [isLoading, setIsLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {colorMode, toggleColorMode, toggleFs, isAuth, setIsAuth} = useContext(osis)
    const toast = useToast()
    function isAuthFromCookie(){
        const isAuthToken = Cookies.get("auth")
        if (isAuthToken != "undefined" && isAuthToken ) return setIsAuth(true)
        return setIsAuth(false)
    }

    async function handleLogout(){
        const toastPromise = new Promise(async (resolve, reject) => {
            setIsLoading(true)
            try {
                const res = await fetch("http://localhost:3000/api/auth/logout",{
                    method: "GET",
                    credentials: "include"
                })
                const data = await res.json()
                if(data.success){
                    Cookies.remove("auth")
                    setIsAuth(false)
                    setIsLoading(false)
                    resolve(data.message)

                }else{
                    Cookies.remove("auth")
                    setIsAuth(false)
                    reject(data.message)
                }
            } catch (error) {
                reject(data.message)
            } finally{
                useNavigate('/login')
                setIsLoading(false)
            }
        })

        toast.promise(toastPromise, {
            success: value => ({ 
              title: 'Success', 
              description: value,
              isClosable: true,
              position: 'top',
              containerStyle: {
                zIndex: 9999
              },
              duration: 2000
            }),
            error: value => ({ 
              title: 'Oops!', 
              description: value,
              isClosable: true,
              position: 'top',
              containerStyle: {
                zIndex: 9999
              },
              duration: 2000
            }),
            loading: { title: 'Loading', description: "Tunggu sebentar", position: "top", isClosable: true},
        })
    }

  return (
    <Box pos={"fixed"} w={"full"} zIndex={1000}>
        <Flex px={2} py={{base: 1, lg: "1px"}} bg={"#241a0e"} color={"white"}>
            <Image src='logoosis-white.png' maxH={{base:8, lg: 8}}/>
            <Flex alignItems={"center"} flexGrow={1} justifyContent={"end"}>
                {true ? <RxEnterFullScreen opacity={0.7} onClick={toggleFs} cursor={"pointer"}/>:
                        <RxExitFullScreen opacity={0.7} onClick={toggleFs} cursor={"pointer"} />}
                <RxDividerVertical size={21} opacity={0.7}/>

                {colorMode == "light" ? <FiMoon opacity={0.7} onClick={toggleColorMode} cursor={"pointer"}/>:
                                        <FiSun opacity={0.7} onClick={toggleColorMode} cursor={"pointer"} />}
                <RxDividerVertical size={21} opacity={0.7}/>

                <Popover>
                <PopoverTrigger>
                    <Image src='logoosis.png' maxW={{base:8, lg: 6}} maxH={{base:6}} 
                    borderRadius={"lg"} border={"1px solid black"} onClick={isAuthFromCookie}/>
                </PopoverTrigger>
                <PopoverContent bgGradient="linear(to-r, cyan, transparent)" border={"1px solid black"}>
                    <Link to={!isAuth? "/login": "/"}>
                        <Button isLoading={isLoading} fontWeight='700' colorScheme="blackAlpha" 
                        variant={"solid"} w={"full"} onClick={isAuth? handleLogout : null}>
                            {!isAuth ? "Login" : "Logout"}
                        </Button>
                    </Link>
                    
                    <PopoverArrow />
                </PopoverContent>
                </Popover>
                
            </Flex>
        </Flex>
        

        <Flex bgGradient={"linear(to-r, yellow.300, yellow.400)"} minH={{base: 9, lg: 6}} alignItems={"center"} px={2} py={1} justifyContent={'space-between'}>
            <Box display={"flex"} gap={2} fontSize={"sm"} alignItems={"center"} color={"black"}>
                <Text fontWeight={700} fontSize={{base: "sm", lg: "10px"}}>Sekolah</Text>
                <Image src='sultan.png' borderRadius={"full"} maxH={{base: 6, lg: 4}} maxW={{base: 6, lg: 4}}/>
                <Text fontWeight={600} fontSize={{base: "10px", lg: "7px"}}>SMA SWASTA SULTAN AGUNG</Text>
            </Box>
            <Button leftIcon={<MdOutlinePushPin style={{transform: "rotate(-45deg)", width: "12px"} } />} 
            colorScheme={"blue"} variant='solid' h={{base: "21px", lg: "19px"}} px={{base: 2, lg: 1}} display={"flex"} alignItems={"center"}
            onClick={onOpen} >
                <Text fontSize={{base: "10px", lg: "7px"}} placeSelf={"center"} >Visit</Text>
            </Button>
        </Flex>

        {/* modals */}
        <Modals isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    </Box>
  )
}

export default Navbar