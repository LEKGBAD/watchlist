"use client"
import { Carousel } from '@mantine/carousel'
import React from 'react'
import MovieSummaryCard from './MovieSummaryCard'

function MovieCarousel({movies,variant}) {
    
  return (
    <Carousel slideSize="33.333333%" slideGap="lg" loop align="start">
        {movies.splice(0,10).map((movie,id)=>
        <Carousel.Slide key={id} >
            <MovieSummaryCard
             key={id} 
             name={movie?.name} 
             rating={movie?.tomatoRating?.tomatometer?movie?.tomatoRating?.tomatometer:movie?.rating} 
             image={movie?.posterImage?.url?movie?.posterImage?.url:movie?.poster}
             variant={variant}
             id={movie.emsVersionId?movie.emsVersionId:movie.movieId}
             />
        </Carousel.Slide>
        )}
    </Carousel>
  )
}

export default MovieCarousel
