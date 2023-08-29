"use client"
import MovieCarousel from '@/components/MovieCarousel';
import RouterTransition from '@/components/RouterTransition';
import SearchInput from '@/components/SearchInput';
import SkeletonLoader from '@/components/SkeletonLoader';
import { getPopularity, searchMovies } from '@/lib/requests/movieRequests';
import { Stack, Title } from '@mantine/core';
import React, { useState } from 'react'

const Search = () => {
    const [search,setSearch]=useState("");
    const [isLoading,setIsLoading]=useState(false);
    const [searchResult,setSearchResult]=useState(false);
    const [success,setSuccess]=useState(false);

    function onChange(e){
        setSearch(e.target.value)
    }
    async function searchHandler(input){
        setIsLoading(true)
        setSuccess(false)
        setSearchResult(null);
        try{
            const res=await fetch("/search/api",
        {
          method:"POST" ,
          headers:{'Content-Type': 'application/json'} ,
          body:JSON.stringify({
            movieName:input
          }),
        })
           const data=await res.json();
           if(data.movies.length){
            setSearchResult(data.movies)
            
           }
           else{
            setSuccess(true)
           }
           setIsLoading(false)

        }catch(err){
            console.log(err)
        }
    }
  return (
    <>
    <Stack h={500} py={40}>
        <Title order={2} align='center'>Search for a movie</Title>

        <SearchInput value={search} onChange={onChange} searchHandler={searchHandler} isLoading={isLoading}/>

        {isLoading && <SkeletonLoader />}
        {searchResult?.length>0 && <MovieCarousel movies={searchResult}/>}
        {success && <Title size="xl" align='center'>Movie not available</Title>}

    </Stack>
    </>
  )
}

export default Search
