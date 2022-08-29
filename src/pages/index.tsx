import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useCallback, useContext, useState } from 'react'
import Title from '../components/Title'
import styles from '../styles/Home.module.css'
import { HiMoon } from 'react-icons/hi';
import { BsSun } from 'react-icons/bs';
import { CustomThemeContext } from '../context/ThemeContext'
import { theme } from '../theme'

const Home: NextPage = () => {
  const { currentTheme, setNewTheme } = useContext(CustomThemeContext);
  const currentThemeMode = currentTheme.updatedTheme.themeType

  const themeSlection = useCallback(() => {
    if (currentThemeMode === 'light') {
      setNewTheme(theme['dark']);
    } else {
      setNewTheme(theme['light']);
    }
  }, [currentThemeMode, setNewTheme]);

  const icon = currentThemeMode === 'light' ? <BsSun /> : <HiMoon />

  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Software Developer" />
      </Head>

      <main className={styles.main}>
        <button onClick={() => themeSlection()}>
          {icon}
        </button>
        <Title title="Hello Simon" />
      </main>

      <footer className={styles.footer}>
        <p>my Footer</p>
      </footer>
    </div>
  )
}

export default Home
