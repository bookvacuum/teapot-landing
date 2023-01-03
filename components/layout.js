import React from "react";
import Link from "next/link";
import {Press_Start_2P} from '@next/font/google';

import Image from 'Next/image';
import teapot from '../public/teapotlg.png'
import {Space_Grotesk} from '@next/font/google';




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
  marginTop: '0',
  paddingTop: '4rem',
  textAlign: 'right',
  display: 'flex',
  position: 'sticky',
  top: '20px',
};

const navItem = {
  padding:'3rem',
  color: '#000000',
  fontSize: "1.5rem",
};

const Layout = () => {
  return (
  <nav className={`${space.className}`} style = {navContainer}>
          <Image
        src={teapot}
        alt="teapot logo"
        width={160} 
        height={60} 
      />
      <Link href="/" style = {navItem}>
        about us
      </Link>
      <Link href="/pricing" style = {navItem}>
        spill the tea
      </Link>
    </nav>
    
  )
};

export default Layout;