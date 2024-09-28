import React, { useState } from 'react'
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

function Login() {
  const [nis, setNis] = useState("")
  const [password, setPassword] = useState("")

  async function userLogin(){
    const response = await fetch("http://localhost:3000/api/auth/login",{
      method: "POST",
      credentials: "include",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
          nis,
          password
      })
      }
    )
    const data = await response.json()
    console.log(data)
    if(data.success){
      document.location.href = "/"
    }
  }

  return (
    <Box display={"flex"} flexDir={"column"} alignItems={"center"} 
    justifyContent={"center"} px={0} gap={3} pt={{base: 20, lg: 0}}
    position="absolute"
      top="45%"
      left="50%"
      transform="translate(-50%, -50%)">
      <Text fontSize={{base: "4xl", lg: "6xl"}} fontFamily={"sans-serif"} fontWeight={800} bgClip={"text"} bgGradient={'linear(to-r, #39240b, brown)'}>
        Login
      </Text>
      <Text textAlign={"center"} fontSize={"lg"} opacity={0.7}>
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

      <Button type='submit' colorScheme='orange' mt={5} onClick={userLogin} fontWeight={700}>
        Login
      </Button>
    </Box>
  )
}

export default Login