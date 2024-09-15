import '../styles/globals.css'
import Layout from "../components/layout";
import localFont from '@next/font/local';
import { SessionProvider as AuthProvider } from 'next-auth/react';


import {Lexend} from '@next/font/google';

const myFont = localFont({ src: './lexend.ttf' })


const lexend = Lexend({
   subsets: ['latin'],
  //  display: "fallback",
  })



function MyApp({ Component, pageProps: { session, ...pageProps }}) {
  return (
  <AuthProvider session={session}>

  <main className={myFont.className}>
   <Layout>
  <Component {...pageProps} />
   </Layout>
  </main>
    </AuthProvider>

  );
}

export default MyApp
