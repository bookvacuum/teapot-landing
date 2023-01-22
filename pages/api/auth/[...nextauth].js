// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import EmailProvider from 'next-auth/providers/email';
import nodemailer from 'nodemailer';
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import GoogleProvider from 'next-auth/providers/google';

const prisma = new PrismaClient();

// pages/api/auth/[...nextauth].js
export default NextAuth({
    pages: {
    signIn: '/',
    signOut: '/',
    error: '/',
    verifyRequest: '/',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
   adapter: PrismaAdapter(prisma),
});