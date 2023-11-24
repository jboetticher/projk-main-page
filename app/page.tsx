import styles from './_styles/page.module.css';

import SquircleBackdrop from './_components/SquircleBackdrop';
import PageTransition from './_components/PageTransition';
import glitchStyle from './_styles/glitch.module.css';
import Crab from './_components/Crab';
import Link from 'next/link';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Home() {

  const links = [
    { link: 'portfolio', title: 'Portfolio' },
    { link: 'writings', title: 'Writings' },
    { link: 'skills', title: 'Skills' },
  ];

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <SquircleBackdrop />
      <div className={styles.center}>
        <h1 className={glitchStyle.glitch} data-text={"PROJK"} style={{ width: '323px', fontSize: '100px', userSelect: 'none' }}>
          PROJK
        </h1>
        <p className={styles.subtitle}>I'm Jeremy. I have projects.</p>
        <div className={styles.linkContainer}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className={`${glitchStyle.glitch} ${styles.link}`}
              style={{ animationDelay: `${0.8 + index * 0.5}s` }}
              data-text={link.title}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className={styles.iconContainer}>
          <Link
            href='https://github.com/jboetticher'
            className={`${styles.link} ${styles.iconButton} ${styles.green}`}
            style={{ animationDelay: `${0.8 + 3 * 0.5}s` }}
            target='_blank'
          >
            <GitHubIcon fontSize='large' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/jeremy-boetticher/'
            className={`${styles.link} ${styles.iconButton} ${styles.purple}`}
            style={{ animationDelay: `${0.8 + 3 * 0.5}s`}}
            target='_blank'
          >
            <LinkedInIcon fontSize='large' />
          </Link>
        </div>
      </div>
      <Crab />
    </main>
  );
}

