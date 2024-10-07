import React, { useRef, useState, useContext } from 'react'
import { Popover,
    PopoverTrigger,
    Image,
    PopoverContent,
    Button,
    PopoverArrow,
    useToast,
    useDisclosure,
    Box,
    Flex,
    Text
 } from '@chakra-ui/react'
 import { Link } from 'react-router-dom'
 import Cookies from 'js-cookie'
import { osis } from '../../App'

function AuthPopover() {
    const [isLoading, setIsLoading] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {colorMode, isAuth, setIsAuth} = useContext(osis)
    const authRef = useRef(null)
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
                onClose()
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
    <Popover
        onOpen={onOpen}
        isOpen={isOpen}
        onClose={onClose}
        initialFocusRef={authRef}>
    <PopoverTrigger>
        <Image src='logoosis.png' maxW={{base:8, lg: 6}} maxH={{base:6}} 
        borderRadius={"lg"} border={"1px solid black"} onClick={isAuthFromCookie}/>
    </PopoverTrigger>
    <PopoverContent >
        <Flex w={"full"} p={2} flexDir={"column"} gap={3}>
            <Box color={colorMode == "light" ? "black" : "white"}>
                <Text fontSize={"lg"} fontWeight={"700"}>ELBERT AUSTEN</Text>
                <Text>NIS: 24090001</Text>
            </Box>

            <Link to={!isAuth? "/login": "/"}>
            <Button isLoading={isLoading} fontWeight='700' colorScheme="blue" size={"sm"}
            variant={"outline"} w={"50%"} onClick={isAuth? handleLogout : null} rounded={"full"}>
                {!isAuth ? "Login" : "Logout"}
            </Button>
        </Link>
        </Flex>
        
        <PopoverArrow />
    </PopoverContent>
    </Popover>
  )
}

export default AuthPopover