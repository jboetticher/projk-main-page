'use client'

import { useEffect, useState } from 'react';
import styles from './styles/page.module.css';

import glitchStyle from './styles/glitch.module.css';
import Image from 'next/image';

export default function Home() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    // Optionally, set a timeout to remove the animation divs after the animation ends
  }, []);

  return (
    <main style={{ overflow: 'hidden' }}>
      <div className={styles.loadingAnimationContainer}>
        <div className={styles.blackOut} />
        <div className={`${styles.diagonalLine} ${styles.purple} ${animate ? styles.animate : ''}`}></div>
        <div className={`${styles.diagonalLine} ${styles.green} ${animate ? styles.animate : ''}`}></div>
      </div>
      <div className={glitchStyle.glitch} data-text={"PROJK"}>
        PROJK
      </div>
      <Image src={'next.svg'} alt='vercel' width={100} height={50} color='white' />
    </main>
  );
}

