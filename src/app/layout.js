"use client"
import { Container, MantineProvider } from '@mantine/core'
import './globals.css'
import { Inter } from 'next/font/google'
import {SessionProvider} from "next-auth/react"
import Header from '@/components/navigation/Header'
import {useSession} from "next-auth/react"
import { useEffect } from 'react'
import { authOptions } from './api/auth/[...nextauth]/route'
import Nav from '@/components/Nav'
import "node_modules/react-modal-video/scss/modal-video.scss"
import { Notifications } from '@mantine/notifications'
import RouterTransition from '@/components/RouterTransition'
// import { authOptions } from './api/auth/[...nextauth]'
// import Providers from "./Providers";


const inter = Inter({ subsets: ['latin'] })

 const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default  function RootLayout({children}) {
 
  

  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider >
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{colorScheme:"dark"}}>
          <Notifications />
          {/* <RouterTransition /> */}
        <Nav />
        <main>
        <Container style={{
          paddingTop:"1rem",
          paddingBottom:"1rem"
        }}>{children}
        </Container>
        </main>
        
        </MantineProvider>
        </SessionProvider>
        
        </body>
    </html>
  )
}
