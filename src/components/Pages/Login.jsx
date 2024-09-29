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

function Login() {
  const {isAuthFromDB} = useContext(osis)
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
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} 
    justifyContent={"center"} px={0} gap={3} pt={{base: 20, lg: 0}}
    position="absolute"
      top="45%"
      left="50%"
      transform="translate(-50%, -50%)">
      <Text className='font-link' fontSize={{base: "4xl", lg: "6xl"}} fontWeight={800} bgClip={"text"} bgGradient={'linear(to-r, #39240b, brown)'}>
        Login
      </Text>
      <Text className='font-link' textAlign={"center"} fontSize={"lg"} opacity={0.7}>
        Untuk mengikuti acara dan berita terbaru dari OSIS
      </Text>
      <Image src="logoosis.png" maxW={160}/>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FaRegUser />
        </InputLeftElement>
        <Input type='tel' placeholder='NIS' onChange={(e) => setNis(e.target.value)}/>
      </InputGroup>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FaRegUser />
        </InputLeftElement>
        <Input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      </InputGroup>

      <Button colorScheme='teal' mt={5} 
      onClick={userLogin} fontWeight={700} isLoading={isLoading} loadingText='Submitting'>
        Login
      </Button>
    </Box>
  )
}

export default Login