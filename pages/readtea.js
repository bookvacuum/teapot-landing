import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import RecipeReviewCard from "../components/reviewplain";

export default function Spill() {
  
  return (
    <>
    <div className={styles.feed}>
    <RecipeReviewCard/>
    <RecipeReviewCard/>
     <RecipeReviewCard/>
      </div> 
      

    </>
  );
}
