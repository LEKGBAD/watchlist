import React from 'react'
import {Button, Center, Group, Stack,Text,Container} from "@mantine/core"
import { IconDeviceTv } from '@tabler/icons-react'
import { useRouter } from 'next/navigation'


const AuthenticatedScreen = () => {
  const Router=useRouter();
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
          <Button 
          size='md' variant='gradient' 
          gradient={{from:"blue",to:"cyan"}} leftIcon={<IconDeviceTv size={20}/>}
           className='bg-blue-500'
           onClick={()=>Router.push("/dashboard")}
           >
            Dashboard
          </Button>
        </Group>
      </Stack>
      </Container>
    </Center>
  )
}

export default AuthenticatedScreen
