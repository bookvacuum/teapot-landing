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
        {reviewslist.map(reviewslist => (  
            <RecipeReviewCard key={reviewslist.title} {...reviewslist} />
        ))}
    </div> 
    </>
    )
}
