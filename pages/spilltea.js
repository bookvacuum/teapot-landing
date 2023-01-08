import Head from "next/head";
import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Script from 'next/script';
import Modal from '../components/modal'


const survey = {
  marginTop:'2rem',
  pointerEvents: 'none',
};

export default function Spill() {
    
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <Head>
        <title>send love to the homies who need it</title>
        <meta name="description" content="quit now, bro" />
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://tally.so/widgets/embed.js"/> 
    </Head>
    <div className={styles.container} onClick={() => setShowModal(true)}>
    <iframe style = {survey} data-tally-src="https://tally.so/embed/mVpqjN?hideTitle=1&transparentBackground=1&dynamicHeight=1" width="100%" height="542" frameborder="0" marginheight="0" marginwidth="0" title="Spill the real tea with the help of AI. "></iframe>        
    
    </div> 
      <Modal onClose={() => setShowModal(false)} show={showModal}> This feature is currently invite-only. Please fill out this form to get early access.
    </Modal>
    

    </>
);
}

