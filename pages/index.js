import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import {Space_Grotesk} from '@next/font/google';
import Image from 'Next/image';
import teapot from '../public/browntp.png'



// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({
   subsets: ['latin'],
  //  display: "fallback",
  })


const title = {
  color: "#1F331A",
  fontSize: "2rem",
  marginLeft: '3rem',
  marginTop: "2.3rem",
  float: 'left',
  position: 'relative',
};



export default function Home() {
  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="quit now, bro" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
      <Layout/> 
      <div className={styles.content}>
        <Image src={teapot} alt="Picture of the author"/>
        <h1>hi hi hi</h1>
      </div> 
  
      
 
    </div>
    </>
  );
}
