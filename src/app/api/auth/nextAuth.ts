// // app/api/auth/[...nextauth].ts

// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import EmailProvider from "next-auth/providers/email";
// import { PrismaAdapter } from "@next-auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//     EmailProvider({
//       server: process.env.EMAIL_SERVER,
//       from: process.env.EMAIL_FROM,
//     }),
//   ],
//   adapter: PrismaAdapter(prisma),
//   secret: process.env.NEXTAUTH_SECRET,
//   pages: {
//     signIn: '/login',
//   },
//   callbacks: {
//     async session({ session, user }) {
//       session.user.id = user.id;
//       return session;
//     },
//   },
// });
