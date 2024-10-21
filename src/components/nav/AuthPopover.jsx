// ### Import package from node_modules
import React, { useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom'

// ### Import package from chakra ui
import { 
    Popover,
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

 import Cookies from 'js-cookie'

//  import style
import "./navbar.css"

// import context osis from App.jsx
import { osis } from '../../App'

// import library from libs
import { isAuthFromCookie } from '../../../lib/libs.js'

function AuthPopover() {
    // Declaration Hooks
    const {colorMode, isAuth, setIsAuth} = useContext(osis) // context from osis
    const [isLoading, setIsLoading] = useState(false) // loading
    const [user, setUser] = useState({name: "Guest", nis: "______"})
    const authRef = useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast() // toast

    // check authentication
    function checkIsAuth(){
        isAuthFromCookie("auth", setIsAuth, Cookies) // get function from libs
        const cookieName = Cookies.get("name")
        const cookieNis = Cookies.get("nis")
        if(cookieName == cookieNis) return setUser({
            name: "Guest",
            nis: "______"
        })
        return setUser({
            name: cookieName,
            nis: cookieNis
        })
    }
    
    async function handleLogout(){
        const toastPromise = new Promise(async (resolve, reject) => {
            setIsLoading(true)
            try {
                const res = await fetch(import.meta.env.VITE_SERVER_URI + "/api/auth/logout",{
                    method: "GET",
                    credentials: "include"
                })
                const data = await res.json()
                if(data.success){
                    resolve(data.message)
                }else{
                    reject(data.message)
                }
            } catch (error) {
                reject("couldn't login")
            } finally{
                const toRemove = ["name", "auth", "nis", "role", "isOsis"]
                toRemove.map(cookie => Cookies.remove(cookie))
                setIsAuth(false)
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
        initialFocusRef={authRef}
        >
    <PopoverTrigger>
        <Image src='logoosis.webp' maxW={{base:8, lg: 6}} maxH={{base:6}} 
        borderRadius={"lg"} border={"1px solid black"} onClick={checkIsAuth}/>
    </PopoverTrigger>
    <PopoverContent className='authpopover'>
        <Flex w={"full"} p={2} flexDir={"column"} gap={3}>
            <Box color={colorMode == "light" ? "black" : "white"}>
                <Text fontSize={{base: "sm", lg: "lg"}} fontWeight={"700"}>{user.name}</Text>
                <Text fontSize={{base:"xs", lg:"md"}}>NIS: {user.nis}</Text>
            </Box>

            <Link to={!isAuth? "/login": "/"}>
            <Button isLoading={isLoading} fontSize={{base: "sm", lg: "md"}} fontWeight='700' colorScheme="blue" size={{base:"xs", lg: "sm"}}
            variant={"outline"} w={"50%"} onClick={isAuth? handleLogout : onClose} rounded={"full"}>
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