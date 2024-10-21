import React, {createContext, useEffect, useState} from 'react'
import AcceptJoin from './AcceptJoin'
import RequestJoin from './RequestJoin'
import io from "socket.io-client"
import { useNavigate, useLocation } from 'react-router-dom'

export const socketContext = createContext()

function QuizInvitation(){
  const socket = io(import.meta.env.VITE_SOCKET_DOMAIN) 

  const location = useLocation()
  const {isAdmin, nis, name} = location.state == undefined ? {isAdmin: false, nis: false, name: false}: location.state
  const navigate = useNavigate()

  useEffect(()=>{
    if(!nis || !name){
      navigate("/event", {replace: true})
    }
  }, [])

  const provider ={
    socket,
    nis,
    name
  }

  return (
    <socketContext.Provider value={provider}>
      {nis && name &&
        <>
          {isAdmin? <AcceptJoin /> : <RequestJoin />}
        </>
      }
      
      
    </socketContext.Provider>

  )
}

export default QuizInvitation