import React, {createContext, useEffect, useState} from 'react'
import AcceptJoin from './AcceptJoin'
import RequestJoin from './RequestJoin'
import io from "socket.io-client"
import { useNavigate, useLocation } from 'react-router-dom'

export const socketContext = createContext()

function QuizInvitation(){
  const socket = io(import.meta.env.VITE_SOCKET_DOMAIN) 

  const location = useLocation()
  const {isAdmin, nis} = location.state == undefined ? {isAdmin: false, nis: false}: location.state
  const navigate = useNavigate()

  useEffect(()=>{
    if(!nis){
      navigate("/", {replace: true})
    }
  }, [])

  const provider ={
    socket,
    nis
  }

  return (
    <socketContext.Provider value={provider}>
      {nis &&
        <>
          {isAdmin && nis == "admin" ? <AcceptJoin /> : <RequestJoin />}
        </>
      }
      
      
    </socketContext.Provider>

  )
}

export default QuizInvitation