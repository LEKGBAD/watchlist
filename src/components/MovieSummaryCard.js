import { Button, Card, Image, Rating, Stack, Text } from '@mantine/core'
import Link from 'next/link';
import React from 'react'

function MovieSummaryCard({id,name,image,rating,variant}) {
    const roundedRating=rating/10/2;
    

  return (
    <Card withBorder radius="md" p="md">
        <Card.Section>
            <Image src={image} alt={name} height={250} withPlaceholder/>
        </Card.Section>
        <Card.Section mt="md" p="md">
            <Stack>
                <Text size="lg" weight={500} truncate>{name}</Text>
                <Rating value={roundedRating} fractions={5} readOnly/>
                {variant !== "opening" && 
                <Link href={`/movies/${id}`}>
                <Button 
                radius="md" 
                style={{}} 
                className='bg-blue-500 w-min'
                >
                    More Details
                </Button>
                </Link>
                }
            </Stack>
        </Card.Section>
    </Card>
  )
}

export default MovieSummaryCard
