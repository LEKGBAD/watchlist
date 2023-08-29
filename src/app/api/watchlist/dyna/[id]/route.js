import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function DELETE(request,{params}){
    const {user}=await getServerSession(authOptions);
    if(!user){
        return NextResponse.status(401).json({message:"Unauthorized Access"})
      }
    const {id:movieId}=params;
    try{
        const deletedWatchlist=await prisma.watchlist.delete({
            where:{
                userId_movieId:{movieId,userId:user.id}
            }
        })
        return NextResponse.json({message:"Watchlist item deleted",status:"deleted",deletedWatchlist})
    }catch(err){
        console.log(err)
    }
    
}