import '../styles/globals.css'
import Layout from "../components/layout";


import {Lexend} from '@next/font/google';

const lexend = Lexend({
   subsets: ['latin'],
  //  display: "fallback",
  })



function MyApp({ Component, pageProps }) {
  return (
  <main className={lexend.className}>
  <Component {...pageProps} />
  </main>
  );
}

export default MyApp
