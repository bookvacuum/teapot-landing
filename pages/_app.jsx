import '../styles/globals.css'
import Layout from "../components/layout";
import localFont from '@next/font/local';


import {Lexend} from '@next/font/google';

const myFont = localFont({ src: './lexend.ttf' })


const lexend = Lexend({
   subsets: ['latin'],
  //  display: "fallback",
  })



function MyApp({ Component, pageProps }) {
  return (

  <main className={myFont.className}>
   <Layout>
  <Component {...pageProps} />
   </Layout>
  </main>
 
  );
}

export default MyApp
