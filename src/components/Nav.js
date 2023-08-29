"use client"
import React from 'react'
import {useSession} from "next-auth/react"
import Header from './navigation/Header'

function Nav() {
    const {data:session}=useSession()
    if(session){
        return <Header />
    }
  return (
    null 
  )
}

export default Nav
