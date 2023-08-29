"use client"
import { formatDate, formatRating } from '@/lib/utils'
import { Avatar, Badge, Button, Group, Image, Rating, ScrollArea, SimpleGrid, Space, Spoiler, Stack, Text, Title, Tooltip } from '@mantine/core'
import { notifications } from '@mantine/notifications'
import { IconArrowLeft, IconBookmark, IconCheck, IconPlayerPlay } from '@tabler/icons-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
// import { TooltipGroup } from '@mantine/core/lib/Tooltip/TooltipGroup/TooltipGroup'
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'

function UserDetails({movie,bookmarked,movieId,userId}) {
    const {genres,posterImage,name,releaseDate,tomatoRating,cast,synopsis,trailer,directedBy,}=movie;
    const [modalOpen,setOpen]=useState(false);
    const [isBookmarked,setIsBookmarked]=useState(bookmarked)
    const [isLoading,setLoading]=useState(false)
    const Router=useRouter()


    async function addToWatchlist(){
        setLoading(true)
        notifications.show({
            id:"add-watchlist",
            loading:true,
            title:"Adding to watchlist",
            message:`${name} will be added to watchlist`,
            autoClose:false,
            withCloseButton:true
        })
        try{
        const res=await fetch("/api/watchlist",
        {
          method:"POST" ,
          headers:{'Content-Type': 'application/json'} ,
          body:JSON.stringify({
            name,
            movieId,
            rating:tomatoRating.tomatometer,
            poster:posterImage.url,
            userId
          }),
        })
        const data=await res.json();
        if(data.status==="success"){
        notifications.update({
            id:"add-watchlist",
            color:"teal",
            title:"Added to watchlist",
            message:`${name} has been added to watchlist`,
            icon:<IconCheck size="1rem"/>,
            autoClose:3000,
        })
    }
    else if(data.status==="existing"){
        notifications.update({
            id:"add-watchlist",
            color:"yellow",
            title:"Movie in watchlist",
            message:`${name} already in watchlist`,
            icon:<IconCheck size="1rem"/>,
            autoClose:3000,
        })
    }
    else{
        notifications.update({
            id:"add-watchlist",
            color:"red",
            title:"Cant add movie",
            message:`${name} can not be added to watchlist`,
            icon:<IconCheck size="1rem"/>,
            autoClose:3000,
        })
    }
        setIsBookmarked(true)
    }catch(err){
        console.log(err)
    }
    setLoading(false)
    }
    async function removeFromWatchlist(){
        setLoading(true)
        notifications.show({
            id:"remove-watchlist",
            loading:true,
            title:"Removing from watchlist",
            message:`${name} will be removed from watchlist`,
            autoClose:false,
            withCloseButton:true
        })
        try{
        const res=await fetch(`/api/watchlist/dyna/${movieId}`,
        {
          method:"DELETE" ,
          headers:{'Content-Type': 'application/json'} ,
        })
        const data=await res.json();
        if(data.status==="deleted"){
            notifications.update({
                id:"remove-watchlist",
                color:"teal",
                title:"removed from watchlist",
                message:`${name} has been removed from watchlist`,
                icon:<IconCheck size="1rem"/>,
                autoClose:3000,
            })
        }
        setIsBookmarked(false)
    }catch(err){
        console.log(err)
    }
    setLoading(false)

    }
  return (
    <>
    
    <Button onClick={()=>Router.back()} leftIcon=<IconArrowLeft /> className='bg-blue-500'>Go Back</Button>
    
    <Space h="md" />
    <SimpleGrid cols={2} verticalSpacing="xl">
        <Image width="100%" height={580} src={posterImage?.url} alt={name} withPlaceholder />
        <Stack justify='flex-start' spacing="lg" h={300} ml="xl">
         <Title order={2} size="h1">{name}</Title>
         <Text>Directed by {directedBy}</Text>
         <Text>Released {formatDate(releaseDate)}</Text>
         <Group>
            {genres?.map((genre,id)=>
            <Badge key={id} radius="sm">{genre.name}</Badge>
            )}
         </Group>
         <Stack>
            <Group>
                <Tooltip.Group openDelay={200} closeDelay={100}>
                <Avatar.Group>
                    {cast?.map((actor,id)=>
                    <Tooltip key={id} label={actor.name} color='blue' withArrow>
                    <Avatar src={actor?.headShotImage?.url} radius="xl" />
                    </Tooltip>
                    )}
                </Avatar.Group>
                </Tooltip.Group>
            </Group>
            <Group>
            <Rating value={formatRating(tomatoRating?.tomatometer)} fractions={5} readOnly/>
            <Text>{`(${formatRating(tomatoRating?.tomatometer)})`}</Text>
            </Group>
            <Group>
                <Button leftIcon=<IconPlayerPlay /> 
                variant='gradient' gradient={{from:"teal",to:"blue",deg:60}} className='bg-blue-500'
                onClick={()=>setOpen(true)}
                >Watch Trailer</Button>
                {isBookmarked?(
                    <Button leftIcon=<IconBookmark /> loading={isLoading} onClick={removeFromWatchlist} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className='bg-blue-500'>Remove from Watchlist</Button>

                ):(
                    <Button leftIcon=<IconBookmark /> loading={isLoading} onClick={addToWatchlist} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} className='bg-blue-500'>Add to Watchlist</Button>

                )}
            </Group>
            <Group>
                <Title order={3} size="h2">Summary</Title>
                <ScrollArea h={300}>
                    <Spoiler maxHeight={200} showLabel="Read more" hideLabel="Hide">
                        {synopsis}
                    </Spoiler>
                </ScrollArea>
            </Group>
         </Stack>
        </Stack>
        <ModalVideo channel='custom' url={trailer?.url} isOpen={modalOpen} onClose={()=>setOpen(false)}/>

    </SimpleGrid>
    </>
  )
}

export default UserDetails
