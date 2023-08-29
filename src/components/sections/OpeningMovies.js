"use client"
import { Space, Title } from '@mantine/core'
import React from 'react'
import MovieCarousel from '../MovieCarousel'

function OpeningMovies({openingMovies}) {
  return (
    <>
    <Space h="md" />
    <Title order={2}>Opening Movies/Releases</Title>
    <Space h="md" />
    <MovieCarousel movies={openingMovies} variant="opening"/>
    </>
  )
}

export default OpeningMovies
