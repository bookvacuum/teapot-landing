import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from 'Next/image';
import Button from "../components/button";
import {Space_Grotesk, Lexend, Autour_One} from '@next/font/google';
import Link from "next/link";


const lexend = Lexend({
   subsets: ['latin'],
  display: "fallback",
})


export default function Spill() {
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <Image style = {image} src={teapot} alt="Picture of teapot"/> */}
       <h1 className={styles.header}>our mission</h1>
          <p className={`${styles.paragraph} ${lexend.className}`}>We built Teapot to gather more meaningful data about people’s everyday experiences at work. We found that current solutions out there are either not informative enough, or largely inconsistent. </p>
        <div className={styles.second}>
                 <h1 className={styles.header}>team</h1>
                  <p className={`${styles.paragraph} ${lexend.className}`}>We are built by a small team in SF, CA. Teapot is our first test run of the <strong> <Link href="https://ourquest.xyz">Quest Protocol</Link></strong>, a complete data collection, analytics, and reward system for the internet. Check out the <strong><Link href="https://ourquest.xyz">docs</Link></strong>.</p>
          <Button buttonText= "learn more" link = '/about'/> 
        </div>
      </div> 
        

    </div> 

    </>
  );
}
