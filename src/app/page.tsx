import styles from './styles/page.module.css';

import SquircleBackdrop from './components/SquircleBackdrop';
import PageTransition from './components/PageTransition';
import glitchStyle from './styles/glitch.module.css';

export default function Home() {

  const links = [
    { link: '#', title: 'Portfolio' },
    { link: '#', title: 'Writings' },
    { link: '#', title: 'Achievements' },
  ];

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <SquircleBackdrop />
      <div className={styles.center}>
        <h1 className={glitchStyle.glitch} data-text={"PROJK"} style={{ width: '323px', fontSize: '100px' }}>
          PROJK
        </h1>
        <p className={styles.subtitle}>I'm Jeremy. I have projects.</p>
        <div className={styles.linkContainer}>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.link}
              className={`${glitchStyle.glitch} ${styles.link}`}
              style={{ animationDelay: `${0.8 + index * 0.5}s` }}
              data-text={link.title}
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

