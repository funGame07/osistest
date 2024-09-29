import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Pages/Login"
import Navbar from "./components/nav/Navbar"
import BottomNav from "./components/nav/BottomNav"
import Event from "./components/event/Event"
import { Box, resolveStyleConfig } from "@chakra-ui/react"
import Square from "./components/Square"
import Hexa from "./components/Hexa"
import { useColorMode } from "@chakra-ui/react"
import { useState, useEffect, createContext } from "react"
import Admin from "./components/Admin"
import Cookies from "js-cookie"

export const osis = createContext()

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const {colorMode, toggleColorMode} = useColorMode()
  const themes = ["barbarian", "archer", "goblin", "giant", "wizard"]
  const [osisUser, setOsisUser] = useState(["ss", "ss", "ss"])

  async function isAuthFromDB(){
    const response = await fetch("http://localhost:3000/api/auth/auth",{
        method: "GET",
        credentials: "include"
    })
    const data = await response.json()
    if(data.success){
        Cookies.set("auth", data.userId, {expires: 60})
        setIsAuth(true)
        return true
    }else{
        Cookies.remove("auth")
        setIsAuth(false)
        return false
    }
}

  useEffect(()=>{
    fetch("http://localhost:3000/api/osis")
      .then((res) => res.json())
      .then((data) => {
        setOsisUser(data.data)
      })
      .catch((err) => console.log(err.message))
    
    isAuthFromDB()
  }, [])

    function toggleFs(){
      const element = document.getElementById("fullscreen")
      document.fullscreenElement ? document.exitFullscreen() : element.requestFullscreen()
    }

  const provider = {
    themes,
    colorMode,
    toggleColorMode,
    toggleFs,
    osisUser,
    isAuth,
    setIsAuth,
    isAuthFromDB
  }

  return (
    <Box minH={"100vh"} maxH={"100vh"} id="fullscreen" overflowY={"auto"} bg={colorMode == "light" ? "#EAEAEA" :"gray.900"}>
      <osis.Provider value={provider}>
      <Navbar/>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/event" element={<Event />}/>
          {/* <Route path="/explore" element={<Square />}/> */}
          {/* <Route path="/voting" element={<Hexa />}/> */}
        </Routes>
        <BottomNav colorMode={colorMode}/>
      </osis.Provider>
    </Box>
  )
}

export default App
