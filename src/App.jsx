import {Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Navbar from "./components/Navbar"
import BottomNav from "./components/BottomNav"
import Games from "./components/Games"
import { Box } from "@chakra-ui/react"
import Square from "./components/Square"
import Hexa from "./components/Hexa"
import { useColorMode } from "@chakra-ui/react"
import { useState, useEffect, createContext } from "react"

export const imageOsis = createContext()

function App() {
  const {colorMode, toggleColorMode} = useColorMode()
  const [img, setImg] = useState([])
    const themes = ["barbarian", "archer", "goblin", "giant", "wizard"]
    useEffect(()=>{
        let images = []
        for(let i = 1; i< 12; i++){
            images.push(`osis${i}.png`)
        }
        setImg(images)
        console.log("hii")
    }, [])

  return (
    <Box minH={"100vh"} maxH={"100vh"}>

      <imageOsis.Provider value={{img, themes, colorMode}}>
      <Navbar colorMode={colorMode} toggleColorMode={toggleColorMode}/>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/games" element={<Games />}/>
          <Route path="/explore" element={<Square />}/>
          <Route path="/voting" element={<Hexa />}/>
        </Routes>
      </imageOsis.Provider>
      
      <BottomNav colorMode={colorMode}/>
    </Box>

  )
}

export default App
