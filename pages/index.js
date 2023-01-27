import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import {Space_Grotesk, Lexend, Autour_One} from '@next/font/google';
import Image from 'next/image';
import teapot from '../public/browntp.png';
import Button from "../components/button";
import RecipeReviewCard from "../components/reviewplain";
import { reviews } from '../data';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();




const space = Space_Grotesk({
   subsets: ['latin'],
   display: "fallback",
  })


// const lexend = Lexend({
//    subsets: ['latin'],
//   display: "fallback",
// })

const image = {
width: '8rem',
height: 'auto',
};



// export const getStaticProps = async () =>  {
//     return {
//         props: {
//             reviewslist: reviews,
//         },
//     }
// }

export async function getServerSideProps() {
  // Get all homes
  const reviews = await prisma.review.findMany();
  // Pass the data to the Home page
  return {
    props: {
      reviewslist: JSON.parse(JSON.stringify(reviews)),
    },
  };
}

export default function Home({reviewslist}) {
  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="time to spill tea" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className={styles.container}>
       <div className={styles.feed}>
        <div className={styles.disclaimer}>
        <p className={`${styles.paragraph}`}> <strong>Disclaimer:</strong> AI is undeterminstic and so are the reviews. Some details may be intentionally left to be factually inaccurate in order to preserve the privacy of the reviewer. The gist of the story and the sentiment the user wants to convey are preserved, however. </p>
    </div>
      <div className={styles.contentHome}>
        <Image style = {image} src={teapot} alt="Picture of teapot"/>
        <h1 className={styles.header}>what is teapot?</h1>
        <p className={`${styles.paragraph}`}>Teapot is a place you can submit an honest review of your workplace. We provide increased <strong>privacy</strong> and <strong>anonymity</strong> through AI.</p>
      </div> 
    

      

     </div>
        {reviewslist.map(reviewslist => (  
            <RecipeReviewCard key={reviewslist.title} {...reviewslist} />
        ))}
    </div> 
    </>
  );
}

