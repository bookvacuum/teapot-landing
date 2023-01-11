import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from 'Next/image';
import Button from "../components/button";
import {Space_Grotesk, Lexend, Autour_One} from '@next/font/google';
import Link from "next/link";
import sunwoo from"../public/sunwoo.jpeg";
import sunho from"../public/sunho.jpeg";
import michey from"../public/michey.png";


const lexend = Lexend({
   subsets: ['latin'],
  display: "fallback",
})

const bullet = {
textAlign: "center",
};



export default function Spill() {
  
  return (
    <>
    <div className={styles.container}>
      <div className={styles.content}>
        {/* <Image style = {image} src={teapot} alt="Picture of teapot"/> */}
       <h1 className={styles.header}>our mission</h1>
          <p className={`${styles.paragraph} ${lexend.className}`}>
We build for Amy who went to work during a level 5 storm ⛈️ </p>
        <p className={`${styles.paragraph} ${lexend.className}`}>We build for Khalid whose boss makes racist comments 😩</p>
        <p className={`${styles.paragraph} ${lexend.className}`}>We build for Naomi who found her dream job after taking a risk and switching industries 🥰</p>

          <p className={`${styles.paragraph} ${lexend.className}`}>We built Teapot to gather meaningful stories about peoples everyday experiences at work.
          We believe better working conditions can be achieved when we are able to safely share honest stories about our workplaces. </p>
        <div className={styles.second}>
                 <h1 className={styles.header}>team</h1>
                  <p className={`${styles.paragraph} ${lexend.className}`}>We are built by a small team of friends in San Francisco, CA. 
                  We strive to be the dream workplace for each and everyone of our team members.
                  Teapot is our first test run of <strong> <Link href="https://ourquest.xyz">Quest Protocol</Link></strong>, a complete data collection, analytics, and reward system for the internet. Check out the <strong><Link href="https://ourquest.xyz">docs</Link></strong>.
                  </p>
        </div>


 <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <Image src={sunwoo} alt="Picture of sw"  width={140} 
          height={140} /> 
          <span className={styles.name}>S is our Chief Purr Officer</span>
        </div>
        <div className={styles.profile}>
          <Image src={michey} alt="teapot logo" width={140} height={140}/>
          <span className={styles.name}>M is our Chief Eating Officer </span>
        </div>
        <div className={styles.profile}>
           <Image src={sunho} alt="Picture of sw"  width={140} height={140} /> 
            <span className={styles.name}>SH is our Director of Meows</span>
        </div>
      </div> 
       
      </div> 



    </div> 

    </>
  );
}
