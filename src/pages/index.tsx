import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Software Developer" />
      </Head>

      <main className={styles.main}>
        <Title title="Hello Simon" />
      </main>

      <footer className={styles.footer}>
        <p>my Footer</p>
      </footer>
    </div>
  )
}

export default Home
