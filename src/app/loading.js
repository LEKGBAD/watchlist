"use client"
import { NavigationProgress, nprogress } from '@mantine/nprogress'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Loading(props) {
    const pathname=usePathname()

   
    useEffect(()=>{
        nprogress.start()

    },[pathname])
  return (
    <>
    <NavigationProgress autoReset={true} />
    </>
    
  )
}

export default Loading
