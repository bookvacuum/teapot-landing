import React, { useState } from "react";
import Link from "next/link";
import {Press_Start_2P} from '@next/font/google';
import styles from "../styles/Home.module.css";
import Image from 'Next/image';
import teapot from '../public/teapotlg.png'
import {Space_Grotesk} from '@next/font/google';
import menu from '../public/menu.png';
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



const Layout = () => {

  const [mobileNavActive, setNavActive] = useState(null);

  return (
    <>
    <Head> 
    <meta charSet="UTF-8"/>
    </Head>
  <nav className={`${space.className} ${styles.navContainer}`}>
        <Link href="/" >
          <Image
        src={teapot}
        alt="teapot logo"
        width={160} 
        height={60} 
      />
      </Link>
      <Link href="/" className= {styles.navItem}>
        about us
      </Link>
      <Link href="/spilltea" className= {styles.navItem}>
        spill the tea &#x1F618;
      </Link>
      <Link href="/spilltea" className= {styles.navItem}>
        read the tea
      </Link>
       <Image
          onClick={() => setNavActive(!mobileNavActive)}
          className={styles.mobileNavBar}
          src={menu}
          alt="menu"
          width={60} 
          height={60} 
        />
    </nav>
    </>
  )
};

export default Layout;