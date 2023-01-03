import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

import {Space_Grotesk} from '@next/font/google';
import Image from 'Next/image';
import teapot from '../public/teapotlg.png'



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
      {/* <Image
        src={teapot}
        alt="teapot logo"
        width={160} 
        height={60} 
      /> */}
      <Layout/> 

  
      <h1 className={`${styles.header}`}>
      Quest is the world’s first ecosystem for community-driven crowdsourcing and monetization of data.
      </h1>
      <h3 className={styles.subheader}>
      We build technologies that solve collective action problems in ways that were not thought to be possible before.
      </h3>
 
    </div>
    </>
  );
}
