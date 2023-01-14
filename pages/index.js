import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {Space_Grotesk, Lexend, Autour_One} from '@next/font/google';
import Image from 'next/image';
import teapot from '../public/browntp.png';
import Button from "../components/button";



// If loading a variable font, you don't need to specify the font weight
const space = Space_Grotesk({
   subsets: ['latin'],
   display: "fallback",
  })


const lexend = Lexend({
   subsets: ['latin'],
  display: "fallback",
})

const image = {
width: '8rem',
height: 'auto',
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
      
      <div className={styles.content}>
        <Image style = {image} src={teapot} alt="Picture of teapot"/>
        <h1 className={styles.header}>what is teapot?</h1>
        <p className={`${styles.paragraph} ${lexend.className}`}>Teapot is a place you can submit an honest review of your workplace. We provide increased <strong>privacy</strong> and <strong>anonymity</strong> through AI.</p>
        <div className={styles.second}>
          <h1 className={styles.header}>how does it work?</h1>
          <p className={`${styles.paragraph} ${lexend.className}`}>After you submit your review of your workplace in this form, AI will rewrite and stir your answer with other reviews. Our goal is to preserve the <q>tea</q> while making your identity untraceable.</p>
          <Button buttonText= "learn more" link="/about"/> 
        </div>
        <div className={styles.second}>
          <h1 className={styles.header}>ready to spill the tea?</h1>
          <p className={`${styles.paragraph} ${lexend.className}`}>Join our open beta for Teapot by submitting a review of an employer you worked with, interned at, or even applied to. Thank you for being a part of our community! 💘</p>
          <Button buttonText= "get early access" link='https://calendly.com/quest-team'/> 
        </div>
      </div> 

    </div>
    </>
  );
}
