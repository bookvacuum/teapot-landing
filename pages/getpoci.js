import dynamic from 'next/dynamic'

import pageStyles from "../styles/Home.module.css";

const RandomDots = dynamic(
  () => import('../components/randomDots'),
  { ssr: false }
)

function GetPociPage() {
  return (
    <div className={pageStyles.feed}>
      <RandomDots />
    </div>
  )
}

export default GetPociPage