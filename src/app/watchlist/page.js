"use client"
import MovieCarousel from '@/components/MovieCarousel'
import SkeletonLoader from '@/components/SkeletonLoader'
import { useWatchlist } from '@/lib/hooks/useWatchlist'
import { Button, Center, Stack, Title } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

const Watchlist = () => {
    const {watchlist,isLoading}=useWatchlist();
    const movies=watchlist?.userWatchlist
    
    
  return (
    <Stack>
        <Center h={100} bg="blue">
            <Title>Watchlists</Title>
        </Center>
        {isLoading && <SkeletonLoader />}
        {watchlist?.userWatchlist?.length ? <MovieCarousel movies={watchlist?.userWatchlist}/>:
        <Stack align='center'>
          <Title size="h4" >You have not added any movie</Title>
          <Link href="/search">
          <Button className="bg-blue-500">Search for movies</Button>
          </Link>         
          </Stack>}
        {/* {!watchlist?.userWatchlist?.length &&
        <Stack>
          <Title size="h4" order="h3">You have not added any movie</Title>
        </Stack> } */}
    </Stack>
  )
}

export default Watchlist
