import { SimpleGrid, Skeleton } from '@mantine/core'
import React from 'react'

function SkeletonLoader() {
  return (
    <SimpleGrid spacing="lg" cols={3}>
        <Skeleton h={250} /> 
        <Skeleton h={250} />
        <Skeleton h={250} />

    </SimpleGrid>
  )
}

export default SkeletonLoader
