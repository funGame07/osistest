// ### Import package from node_modules
import { useState, useEffect, createContext } from "react"
import {Routes, Route } from "react-router-dom"
import Cookies from "js-cookie"

// ### Import package from chakra ui
import { useColorMode, Box } from "@chakra-ui/react"

// ### Import pages from component
import Home from "./components/Pages/Home"
import Login from "./components/Pages/Login"
import Admin from "./components/Pages/Admin"
import Navbar from "./components/nav/Navbar"
import BottomNav from "./components/nav/BottomNav"
import Event from "./components/event/Event.jsx"

// ### Import library from libs
import { isAuthFromDB, toggleFs } from "../lib/libs.js"

// ### Create Context
export const osis = createContext()

// ### App template
function App() {
  // ## Declaration hooks
  const [isAuth, setIsAuth] = useState(false) // used to navbar, event, voting
  const [showBottomNavbar, setShowBottomNavbar] = useState(true) // used when quiz begins
  const [osisUser, setOsisUser] = useState(["quizbg2.png", "testosis3.jpg", "testosis2.jpg", "testosis1.jpg", "testosis4.jpg", "testosis5.jpg", "testosis11.jpg"]) // used for carousel 
  const {colorMode, toggleColorMode} = useColorMode() // used for color mode in navbar

  // ## component mount once : user
  useEffect(()=>{
    // # fetch data from API OSIS
    fetch(import.meta.env.VITE_SERVER_URI + "/api/osis")
      // catch respons json
      .then((res) => res.json())
      // catch data object
      .then((data) => {
        setOsisUser(data.data) // catch data OSIS
      })
      .catch((err) => console.log(err.message)) // see if there is any errors
    
    setIsAuth(isAuthFromDB(Cookies, import.meta.env.VITE_SERVER_URI + "/api/auth/auth")) // set authentication to cookies
  }, [])

  // ## create provider
  const provider = {
    colorMode,
    toggleColorMode,
    toggleFs,
    osisUser,
    isAuth,
    setIsAuth,
    isAuthFromDB,
    showBottomNavbar,
    setShowBottomNavbar
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
        <BottomNav/>
        <audio autoPlay controls={false} loop>
          <source src="music.mp3" type="audio/mp3"/>
        </audio>
      </osis.Provider>
    </Box>
  )
}

export default App
