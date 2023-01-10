import Layout from "../components/layout";
import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import RecipeReviewCard from "../components/review";

export default function Spill() {
  
  return (
    <>
    <div className={styles.container}>
    <RecipeReviewCard/>
      </div> 
      

    </>
  );
}
