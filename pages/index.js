import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Space_Grotesk } from '@next/font/google'
import Image from 'next/image'
import teapot from '../public/browntp.png'
import Button from '../components/button'


const space = Space_Grotesk({
  subsets: ['latin'],
  display: 'fallback',
})

const image = {
  width: '8rem',
  height: 'auto',
}

export default function Home({ reviewslist }) {
  return (
    <>
      <Head>
        <title>contribute an anonymous story with AI</title>
        <meta name="description" content="time to spill tea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.feed}>
          <div className={styles.contentHome}>
            <Image style={image} src={teapot} alt="Picture of teapot" />
            <h1 className={styles.header}>what is teapot?</h1>
            <p className={`${styles.paragraph}`}>
              Teapot is a data collection protocol in which we help people share
              meaningful work experiences, while protecting their identities
              using the power of AI. We provide increased{' '}
              <strong>privacy</strong> and <strong>anonymity</strong> through
              using the ability of AI models to translate stories into different
              tones, while preserving sentiment.
            </p>
            <Button buttonText="meet the team" link="/about" />
          </div>
          <>
            <div className={styles.container}>
              <div className={styles.aboutContent}>
                <div className={styles.second}>
                  <h1 className={styles.header}>how does it work?</h1>
                  <p className={`${styles.paragraph}`}>
                    After submitting your story, teapot will obfuscate your
                    identity through the tone of the language used in the story.
                    Our goal is to preserve the <q>sentiment</q> of your story
                    while making your identity untraceable.
                  </p>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </>
  )
}
