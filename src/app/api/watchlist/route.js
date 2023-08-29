import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'
import { prisma } from '@/lib/prisma';
 
export async function GET(request) {
    const {user}=await getServerSession(authOptions);
//   const { searchParams } = new URL(request.url)
//   const id = searchParams.get('id')
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const product = await res.json()
if(!user){
  return NextResponse.status(401).json({message:"Unauthorized Access"})
}
  const userWatchlist=await prisma.watchlist.findMany({
    where:{userId:user.id}
  })
  return NextResponse.json({userWatchlist })
}

export async function POST(request){
  const {user}=await getServerSession(authOptions);
  if(!user){
    return NextResponse.status(401).json({message:"Unauthorized Access"})
  }
  const {name,rating,movieId,poster,userId}=await request.json();
  // const res=await request.json();
  // console.log(movieId)

  const movie=await prisma.watchlist.findUnique({
    where:{
      userId_movieId:{movieId,userId}
    }
  })
  if(movie){
    return NextResponse.json({message:"Already in Watchlist",status:"existing"})
  }
  const newWatchlist=await prisma.watchlist.create({
    data:{name,rating,poster,movieId,userId:user.id}
  })
  return NextResponse.json({
    message:"Added to Watchlist",
    status:"success",
    watchlist:newWatchlist
  })

}