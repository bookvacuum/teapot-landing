import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import teapot from '../public/browntp.png'
import Button from '../components/button'

export default function Home({ reviewslist }) {
  const [inputStory, setInputStory] = useState('')
  const [transformedStory, setTransformedStory] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!inputStory.trim()) {
      setError('Please enter a story first')
      return
    }

    setIsLoading(true)
    setError('')
    setTransformedStory('')

    try {
      // TODO: Connect to actual API endpoint
      // const response = await fetch('/api/transform-story', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ story: inputStory, tone: 'santa_claus' }),
      // })
      // const data = await response.json()

      // Mock response for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1500))
      const mockData = {
        transformedStory: `Ho ho ho! What a tale from the North Pole workshop... The elves and I were hopping around and the snow completely shattered our work area.`,
      }

      setTransformedStory(mockData.transformedStory)
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

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
            <Image
              style={styles.heroImage}
              src={teapot}
              alt="Picture of teapot"
            />
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
          <div className={styles.tryItOut}>
            <form onSubmit={handleSubmit} className={styles.demoForm}>
              <textarea
                className={styles.storyInput}
                placeholder="Share a work experience here... (e.g., 'Today my manager gave me feedback on my project presentation. It was helpful but missed key KPIs.')"
                value={inputStory}
                onChange={(e) => setInputStory(e.target.value)}
                rows={6}
                disabled={isLoading}
              />

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading || !inputStory.trim()}
              >
                {isLoading ? 'Transforming...' : 'Transform Story'}
              </button>

              {error && <div className={styles.error}>{error}</div>}

              {transformedStory && (
                <div className={styles.result}>
                  <h3 className={styles.resultHeader}>Transformed Story:</h3>
                  <p className={styles.transformedText}>{transformedStory}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
