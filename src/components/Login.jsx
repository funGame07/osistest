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
    justifyContent={"center"} px={0} gap={3}
    position="absolute"
      top="45%"
      left="50%"
      transform="translate(-50%, -50%)">
      <Text fontSize={"6xl"} fontFamily={"sans-serif"} fontWeight={800} bgClip={"text"} bgGradient={'linear(to-l, #7928CA, #FF0080)'}>
        Login
      </Text>
      <Text textAlign={"center"} fontSize={"lg"}>
        Untuk mengikuti acara dan berita terbaru dari OSIS
      </Text>
      <Image src="logoalone.png" maxW={140}/>
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
        <Input type='tel' placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      </InputGroup>

      <Button type='submit' mt={5} onClick={userLogin}>
        Login
      </Button>
    </Box>
  )
}

export default Login