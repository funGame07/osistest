import React, {createContext, useEffect, useState} from 'react'
import AcceptJoin from './AcceptJoin'
import RequestJoin from './RequestJoin'
import io from "socket.io-client"
import { useNavigate, useLocation } from 'react-router-dom'

export const socketContext = createContext()

function QuizInvitation(){
  const location = useLocation()
  const {isAdmin, uuid} = location.state == undefined ? {isAdmin: false, uuid: false}: location.state
  const socket = io(import.meta.env.DOMAIN) 
  const navigate = useNavigate()

  useEffect(()=>{
    if(!uuid){
      navigate("/", {replace: true})
    }
  }, [])

  const provider ={
    socket,
    uuid
  }

  return (
    <socketContext.Provider value={provider}>
      {uuid &&
        <>
          {isAdmin && uuid == "admin" ? <AcceptJoin /> : <RequestJoin />}
        </>
      }
      
      
    </socketContext.Provider>

  )
}

export default QuizInvitation