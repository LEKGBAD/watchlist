"use client"
import Image from 'next/image'
import AuthenticatedScreen from '@/components/AuthenticatedScreen'
import UnauthenticatedScreen from '@/components/UnauthenticatedScreen'
import {useSession} from "next-auth/react"

export default function Home() {
  const {data:session}=useSession();
  console.log(session)
  if(session){
    return <AuthenticatedScreen />
  }
  return (
    <UnauthenticatedScreen />
    )
}
