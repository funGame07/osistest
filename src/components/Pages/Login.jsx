import React, { useState, useContext, useEffect } from 'react'
import { 
  Box,
  Text,
  Button,
  InputLeftElement,
  InputGroup,
  Input,
  Image
 } from '@chakra-ui/react'
 import { FaRegUser } from "react-icons/fa6";
 import { useToast } from '@chakra-ui/react'
 import { useNavigate } from 'react-router-dom';
 import Cookies from 'js-cookie';
 import "./../../index.css"
 import { osis } from '../../App';
 import { RiLockPasswordLine } from "react-icons/ri";


function Login() {
  const {isAuthFromDB, colorMode} = useContext(osis)
  const [isLoading, setIsLoading] = useState(false)
  const [nis, setNis] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast()
  const navigate = useNavigate()

  useEffect(()=>{
    isAuthFromDB().then(val =>{ if(val) location.assign("/")})
  }, [])

  function userLogin() {
    const toastPromise = new Promise(async (resolve, reject) => {
      setIsLoading(true)
      try {
        const res = await fetch("http://localhost:3000/api/auth/login", {
          method: "POST",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ nis, password })
        });
        const data = await res.json();
    
        if (data.success) {
            resolve(data.message)
            Cookies.set("auth", data.osis.id, {expires: 60})
            navigate('/')
        } else {
          reject(data.message)
        }
      } catch (err) {
        reject(data.message)
      }finally{
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
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} w={{base: "80%" , lg:"40%"}} mx={"auto"} mt={40} border={"1px solid rgba(66, 153, 225, 0.5)"} boxShadow={"0 0 20px rgba(66, 153, 225, 0.5)"}
    justifyContent={"center"} px={0} gap={3} py={{base: 20, lg: "7em"}} pos={"relative"} rounded={"3xl"} bg={colorMode == "light"? "white": "black"}>
        <Image src="logoosis.png" maxW={120} minH={110} pos={"absolute"} top={"-4em"} boxShadow={"-0px 15px 10px -8px rgba(66, 153, 225, 0.5)"} rounded={"full"}/>

      <Text  fontSize={{base: "4xl", lg: "4xl"}} fontWeight={800} color={"rgba(66, 120, 225,0.8)"}>
        Login
      </Text>
      <Text className='font-link' textAlign={"center"} fontSize={"sm"} opacity={0.6} w={"70%"}>
        Untuk mengikuti acara dan berita terbaru dari OSIS
      </Text>
      
      <InputGroup w={"70%"}>
        <InputLeftElement pointerEvents='none'>
          <FaRegUser />
        </InputLeftElement>
        <Input type='tel' placeholder='NIS' onChange={(e) => setNis(e.target.value)}/>
      </InputGroup>
      <InputGroup w={"70%"}>
        <InputLeftElement pointerEvents='none'>
          <RiLockPasswordLine />
        </InputLeftElement>
        <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      </InputGroup>

      <Button  colorScheme={"blue"} mt={5} variant={"outline"} bgColor={"rgba(66, 153, 225, 0.4)"}
      onClick={userLogin} fontWeight={700} px={10} rounded={"2xl"} isLoading={isLoading} loadingText='Submitting'>
        Login
      </Button>
    </Box>
  )
}

export default Login