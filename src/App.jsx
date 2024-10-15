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
import Event from "./components/event/Event"
import AcceptJoin from "./components/quiz/AcceptJoin"
import RequestJoin from "./components/quiz/RequestJoin"
import QuizInvitation from "./components/quiz/QuizInvitation"
import Explore from "./components/Pages/Explore.jsx"
import data from "../lib/dataOsis.json"

// ### Import library from libs
import { isAuthFromDB, toggleFs } from "../lib/libs.js"

// ### Create Context
export const osis = createContext()

// ### App template
function App() {
  // ## Declaration hooks
  const [isAuth, setIsAuth] = useState(false) // used to navbar, event, voting
  const [showBottomNavbar, setShowBottomNavbar] = useState(true) // used when quiz begins
  const [osisUser, setOsisUser] = useState(data) // used for carousel 
  const {colorMode, toggleColorMode} = useColorMode() // used for color mode in navbar

  // ## component mount once : user
  useEffect(()=>{
    // # fetch data from API OSIS
    // fetch(import.meta.env.VITE_SERVER_URI + "/api/osis")
    //   // catch respons json
    //   .then((res) => res.json())
    //   // catch data object
    //   .then((data) => {
    //     setOsisUser(data.data) // catch data OSIS
    //   })
    //   .catch((err) => console.log(err.message)) // see if there is any errors

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
    <Box minH={"100vh"} maxH={"100vh"} id="fullscreen" overflowY={"auto"} bg={colorMode == "light" ? "#FFFFFF" :"gray.900"}>
      <osis.Provider value={provider}>
      <Navbar/> 
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />}/>
          <Route path="/admin" element={<Admin />}/>
          <Route path="/event" element={<Event />}/>
          <Route path="/quizinvitation" element={<QuizInvitation />}/>
          <Route path="/join" element={<RequestJoin />}/>
          <Route path="/explore" element={<Explore />}/>
          {/* <Route path="/adminjoin" element={<AcceptJoin />}/> */}
          {/* <Route path="/voting" element={<Hexa />}/> */}
        </Routes>
        <BottomNav/>
      </osis.Provider>
    </Box>
  )
}

export default App

