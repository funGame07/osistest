import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/nav/Navbar"
import BottomNav from "./components/nav/BottomNav"
import Event from "./components/event/Event"
import { Box } from "@chakra-ui/react"
import Square from "./components/Square"
import Hexa from "./components/Hexa"
import { useColorMode } from "@chakra-ui/react"
import { useState, useEffect, createContext } from "react"
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export const imageOsis = createContext()

function App() {
  const handle = useFullScreenHandle()
  const {colorMode, toggleColorMode} = useColorMode()
  const [img, setImg] = useState([])
  const [isFs, setIsFs] = useState(false)
    const themes = ["barbarian", "archer", "goblin", "giant", "wizard"]
    useEffect(()=>{
        let images = []
        for(let i = 1; i< 12; i++){
            images.push(`osis${i}.png`)
        }
        setImg(images)
        console.log("hii")
    }, [])

  const provider = {
    img,
    themes,
    colorMode,
    isFs,
    setIsFs,
    handle,
    toggleColorMode
  }

  return (
    <FullScreen handle={handle}>
      <Box minH={"100vh"} maxH={"100vh"}>
        <imageOsis.Provider value={provider}>
        <Navbar/>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/event" element={<Event />}/>
            <Route path="/explore" element={<Square />}/>
            <Route path="/voting" element={<Hexa />}/>
          </Routes>
        </imageOsis.Provider>
        
        <BottomNav colorMode={colorMode}/>
      </Box>
    </FullScreen>
  )
}

export default App
