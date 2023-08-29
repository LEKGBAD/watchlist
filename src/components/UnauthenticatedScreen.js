import React from 'react'
import {Button, Center, Group, Stack,Text,Container} from "@mantine/core"
import { IconBrandGithub, IconDeviceTv } from '@tabler/icons-react'
import {signIn} from "next-auth/react"

function UnauthenticatedScreen() {
  return (
<Center className='h-screen'>
      <Container>
      <Stack>
        <Text ta="center" fz="xl" fw="bolder" className=''>Welcome to  <Text 
        component='span' variant='gradient' gradient={{from:"cyan",to:"blue"}}>
          Watchlist 
          </Text>
           </Text>
        <Text ta="center">Watchlist is a powerful AI userfriendly movie App. Here you can search fof movies
          and as well find movies information. Efflortlessly add movies to ur watchlist
        </Text>
        <Group position='center'>
          <Button onClick={()=>{signIn("github")}} size='md' variant='gradient' gradient={{from:"blue",to:"cyan"}} leftIcon={<IconBrandGithub size={20}/>} className='bg-blue-500'>
            Get Started
          </Button>
        </Group>
      </Stack>
      </Container>
    </Center>
  )
}

export default UnauthenticatedScreen
