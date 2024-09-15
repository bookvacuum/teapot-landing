import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import Button from "../components/button";
import Link from "next/link";
import cat1 from"../public/readingCat.jpeg";
import cat2 from"../public/veggieCat.png";
import cat3 from"../public/catBoss.png";
import cat from '../public/cat.png';


const bullet = {
textAlign: "center",
};


const image = {
paddingBottom: '0.4rem',
width: '8rem',
height: 'auto',
};


export default function Spill() {
  
  return (
    <>
<div className={styles.container}>
      <div className={styles.aboutContent}>
      <Image src={cat} style ={image} alt="Picture of cat"/>
        {/* <Image style = {image} src={teapot} alt="Picture of teapot"/> */}
       <h1 className={styles.header}>our mission</h1>
          <p className={`${styles.paragraph}`}>
We build for Amy who went to work during a level 5 storm ⛈️ </p>
        <p className={`${styles.paragraph}`}>We build for Khalid whose boss makes racist comments 😩</p>
        <p className={`${styles.paragraph}`}>We build for Naomi who found her dream job after taking a risk and switching industries 🥰</p>

          <p className={`${styles.paragraph}`}>We built Teapot to gather meaningful stories about peoples everyday experiences at work.
          We believe better working conditions can be achieved when we are able to safely share honest stories about our workplaces. </p>
        <div className={styles.second}>
          <h1 className={styles.header}>how does it work?</h1>
          <p className={`${styles.paragraph}`}>After you submit your review of your workplace in this form, AI will rewrite and stir your answer with other reviews. Our goal is to preserve the <q>tea</q> while making your identity untraceable.</p>
          <Button buttonText= "learn more" link="/about"/> 
        </div>
        <div className={styles.second}>
          <h1 className={styles.header}>ready to spill the tea?</h1>
          <p className={`${styles.paragraph}`}>Join our open beta for Teapot by submitting a review of an employer you worked with, interned at, or even applied to. Thank you for being a part of our community! 💘</p>
          <Button buttonText= "get early access" link='https://calendly.com/quest-team'/> 
        </div>
        <div className={styles.second}>
                 <h1 className={styles.header}>team</h1>
                  <p className={`${styles.paragraph}`}>We are built by a small team of friends in San Francisco, CA. 
                  We strive to be the dream workplace for each and everyone of our team members.
                  Teapot is our first test run of <strong> <Link href="https://ourquest.xyz">Quest Protocol</Link></strong>, a complete data collection, analytics, and reward system for the internet. Check out the <strong><Link href="https://quest-4.gitbook.io/quest-sdk/">docs</Link></strong>.
                  </p>
        </div>


      </div> 
       

 <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <Image src={cat1} alt="Picture of sw"  width={140} 
          height={140} /> 
          <span className={styles.name}>S is our Chief Purr Officer</span>
        </div>
        <div className={styles.profile}>
          <Image src={cat3} alt="teapot logo" width={140} height={140}/>
          <span className={styles.name}>M is our Chief Eating Officer </span>
        </div>
        <div className={styles.profile}>
           <Image src={cat2} alt="Picture of sw"  width={140} height={140} /> 
            <span className={styles.name}>SH is our Director of Meows</span>
        </div>
  </div> 

</div>

    </>
  );
}
