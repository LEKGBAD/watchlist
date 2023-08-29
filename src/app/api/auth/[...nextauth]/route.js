import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  adapter:PrismaAdapter(prisma),
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks:{
    async jwt({token,user}){
      user && (token.user=user);
      return token;
    },
    async session({session,user}){
      
      session= {
        ...session,
        user:user
      }
      return session;
    }
  }
}
const handler = NextAuth(authOptions);

export {handler as GET,handler as POST}