import React, { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import cat1 from '../public/readingCat.jpeg'
import cat2 from '../public/veggieCat.png'
import cat3 from '../public/catBoss.png'
import cat from '../public/cat.png'

const bullet = {
  textAlign: 'center',
}

const image = {
  paddingBottom: '0.4rem',
  width: '8rem',
  height: 'auto',
}

export default function Spill() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          <Image src={cat} style={image} alt="Picture of cat" />
          <h1 className={styles.header}>team & mission</h1>
          <p className={`${styles.paragraph}`}>
            we exist to help companies retain top talent by gathering meaningful
            stories about employee satisfaction.
          </p>
        </div>

        <div className={styles.profileContainer}>
          <div className={styles.profile}>
            <Image src={cat3} alt="teapot logo" width={140} height={140} />
            <span className={styles.name}>
              Miche is our Chief Technical Officer{' '}
            </span>
          </div>
          <div className={styles.profile}>
            <Image src={cat1} alt="Picture of sw" width={140} height={140} />
            <span className={styles.name}>
              Sunwoo is our Chief Research Officer
            </span>
          </div>
          <div className={styles.profile}>
            <Image src={cat2} alt="Picture of sw" width={140} height={140} />
            <span className={styles.name}>
              Sun is our Director of Marketing
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
