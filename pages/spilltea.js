import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Script from 'next/script';


const survey = {
  marginTop:'2rem',
};

export default function Spill() {
  
  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="quit now, bro" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://tally.so/widgets/embed.js"/> 
    </Head>
    <div className={styles.container}>
      {/* <Layout/>  */}
      <iframe style = {survey} data-tally-src="https://tally.so/embed/mVpqjN?hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="542" frameborder="0" marginheight="0" marginwidth="0" title="Spill the real tea with the help of AI. "></iframe>        
      </div> 

    </>
  );
}

