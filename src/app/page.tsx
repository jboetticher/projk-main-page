import styles from './styles/page.module.css';

import SquircleBackdrop from './components/SquircleBackdrop';
import PageTransition from './components/PageTransition';
import glitchStyle from './styles/glitch.module.css';

export default function Home() {


  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <SquircleBackdrop />
      <div className={styles.center}>
        <h1 className={glitchStyle.glitch} data-text={"PROJK"} style={{ width: '323px' }}>
          PROJK
        </h1>
      </div>
    </main>
  );
}

