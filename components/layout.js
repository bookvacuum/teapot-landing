import React from "react";
import Link from "next/link";
import {Press_Start_2P} from '@next/font/google';

import Image from 'Next/image';
import teapot from '../public/teapotlg.png'
import {Space_Grotesk} from '@next/font/google';

import Head from 'next/head'



// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({
   subsets: ['latin'],
  //  display: "fallback",
  })

// If loading a variable font, you don't need to specify the font weight
const press = Press_Start_2P({
   subsets: ['latin'],
   weight: ['400'],
   display: "fallback",
  })


const navContainer = {
  backgroundColor: '#F4EDE5',
  paddingTop: '1rem',
  paddingBottom: '0.5rem',
  paddingLeft: '2rem',
  textAlign: 'right',
  display: 'flex',
  position: 'sticky',
  top: '0px',
  zIndex: '1',
  borderBottom: '1px solid #E0C6AC',
};

const navItem = {
  padding:'1rem',
  marginLeft: '2rem',
  color: '#000000',
  fontSize: "1.5rem",
  fontWeight: 'bold',
};

const Layout = () => {
  return (
    <>
    <Head> 
    <meta charSet="UTF-8"/>
    </Head>
  <nav className={`${space.className}`} style = {navContainer}>
        <Link href="/" >
          <Image
          className="marginRight: 2rem"
        src={teapot}
        alt="teapot logo"
        width={160} 
        height={60} 
      />
      </Link>
      <Link href="/" style = {navItem}>
        about us
      </Link>
      <Link href="/spilltea" style = {navItem}>
        spill the tea &#x1F618;
      </Link>
    </nav>
    </>
  )
};

export default Layout;