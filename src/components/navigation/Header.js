import { Avatar, Container, Group, Menu, Text, UnstyledButton } from '@mantine/core'
import React, { useState } from 'react'
import Logo from './Logo'
import {signOut,useSession} from "next-auth/react"
import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Header() {
    const [userMenuOpen,setUserMenuOpen]=useState(false)
    const {data:session}=useSession();
    const user=session?.user
    const Router=useRouter();
    // console.log(session?.session?.user)
  return (
    <Container bg="gray" fluid>
        <Container py={20}>
            <Group position='apart'>
                <Link href="/" className='text-white'>
                <Logo />
                </Link>
                <Link href="/search">
                <Text>Search</Text>
                </Link>
                <Menu width={200} position='bottom-end' 
                transition="pop-top-right"
                onOpen={()=>setUserMenuOpen(true)}
                onClose={()=>setUserMenuOpen(false)}
                >
                    <Menu.Target>
                    <UnstyledButton>
                        <Group spacing={7}>
                        <Avatar src={user?.image} radius="xl" size={20} />
                        <Text>{user?.name}</Text>
                        </Group>
                    </UnstyledButton>
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item onClick={()=>Router.push("/watchlist")}>Watchlist</Menu.Item>
                        <Menu.Label>Account Action</Menu.Label>
                        <Menu.Item color='red' onClick={()=>{signOut({redirect:false})}}>Logout</Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Group>
        </Container>
    </Container>
  )
}

export default Header
