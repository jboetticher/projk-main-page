import styles from './styles/page.module.css';

import SquircleBackdrop from './components/SquircleBackdrop';
import glitchStyle from './styles/glitch.module.css';

export default function Home() {


  const PageTransition = <div className={styles.loadingAnimationContainer}>
    <div className={styles.blackOut} />
    <div className={`${styles.diagonalLine} ${styles.purple} ${styles.animate}`}></div>
    <div className={`${styles.diagonalLine} ${styles.green} ${styles.animate}`}></div>
  </div>;

  return (
    <main style={{ overflow: 'hidden' }}>
      {PageTransition}
      <SquircleBackdrop />
      <div className={glitchStyle.glitch} data-text={"PROJK"} style={{ width: '323px' }}>
        PROJK
      </div>
    </main>
  );
}

