import OpeningMovies from '@/components/sections/OpeningMovies';
import PopularMovies from '@/components/sections/PopularMovies';
import { getPopularity } from '@/lib/requests/movieRequests'
import React from 'react'

// async function getData() {
//     const res = await fetch('https://api.example.com/...')
//     // The return value is *not* serialized
//     // You can return Date, Map, Set, etc.
   
//     if (!res.ok) {
//       // This will activate the closest `error.js` Error Boundary
//       throw new Error('Failed to fetch data')
//     }
   
//     return res.json()
//   }

const Dashboard =async () => {
    const movies = await getPopularity();
  return (
    <>
    <PopularMovies popularMovies={movies?.data?.popularity}/>
    <OpeningMovies openingMovies={movies?.data?.opening}/>
    </>
  )
}

export default Dashboard
