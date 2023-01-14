import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import RecipeReviewCard from "../components/reviewplain";
import { reviews } from '../data';

export const getStaticProps = async () =>  {
    return {
        props: {
            reviewslist: reviews,
        },
    }
}


export default function Show({reviewslist}) {
    return(
    <>
    <div className={styles.feed}>
        <div className={styles.disclaimer}>
        <p className={`${styles.paragraph}`}> <strong>Disclaimer:</strong> AI is undeterminstic and so are the reviews. Some details may be intentionally left to be factually inaccurate in order to preserve the privacy of the reviewer. The gist of the story and the sentiment the user wants to convey are preserved, however. </p>
        </div>
        {reviewslist.map(reviewslist => (  
            <RecipeReviewCard key={reviewslist.title} {...reviewslist} />
        ))}
    </div> 
    </>
    )
}
