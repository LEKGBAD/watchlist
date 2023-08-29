import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import UserDetails from '@/components/UserDetails';
import { prisma } from '@/lib/prisma';
import { getMovieDetails, getPopularity } from '@/lib/requests/movieRequests';
import { getServerSession } from 'next-auth';
import React from 'react'

const MovieDetails =async ({params,searchParams}) => {
    const data = await getMovieDetails(params.id);
    const movie=data?.data?.movie;
    const {user}=await getServerSession(authOptions);
    const userId=user?.id
    const bookmark=await prisma.watchlist.findUnique({
      where:{
        userId_movieId:{movieId:params.id,userId}
      }
    })
    const bookmarked=!!bookmark

  return (
    <UserDetails movie={movie} bookmarked={bookmarked} movieId={params.id} userId={userId}/>
  )
}

export default MovieDetails
