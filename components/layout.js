import React from "react";
import Link from "next/link";
import {Press_Start_2P} from '@next/font/google';



// If loading a variable font, you don't need to specify the font weight
const press = Press_Start_2P({
   subsets: ['latin'],
   weight: ['400'],
   display: "fallback",
  })


const navContainer = {
  color: '#FFF6A5',
  fontSize: "1.2rem",
  marginTop: '0',
  paddingTop: '4rem',
  textAlign: 'right',
};

const navItem = {
  padding:'3rem',
};

const Layout = () => {
  return (
  <nav className={`${press.className}`} style = {navContainer}>
      <Link href="/" style = {navItem}>
        DEVELOPERS
      </Link>
      <Link href="/pricing" style = {navItem}>
        MISSION
      </Link>
    </nav>
    
  )
};

export default Layout;