import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { searchMovies } from "@/lib/requests/movieRequests";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request) {
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
const data=await request.json();
  const {data:{search:{movies}}}=await searchMovies(data.movieName)
  return NextResponse.json({movies })
}