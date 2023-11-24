import PageTransition from "../_components/PageTransition";
import Navigation from "../_components/Navigation";
import glitchStyle from "../_styles/glitch.module.css";
import styles from "./page.module.css";
import { Tag } from "../portfolio/_components/Tag";

async function getData() {
  const res = await fetch('https://projk-main-page.vercel.app/api/writings')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Writings() {

  const data = await getData();

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <Navigation />
      <div className={styles.titleBox}>
        <h1 data-text={"WRITINGS"}
          className={glitchStyle.glitch}
          style={{ fontSize: 60 }}
        >
          WRITINGS
        </h1>
      </div>
      <p style={{ color: 'white', textAlign: 'center', padding: '0 16px 32px 16px' }}>
        A collection of the articles that I've written. I / Projk LLC may not have the rights to the content, as they are likely for other companies.
      </p>
      <p>{Object.keys(data)}</p>
      <section className={styles.articleContainer}>
        <article className={styles.article}>
          <a href="google.com" target="_blank" style={{ textDecoration: 'none' }}>
            <img src="https://cryptologos.cc/logos/moonbeam-glmr-logo.png?v=029" height={60} width={60} style={{ marginRight: '16px' }} />
          </a>
          <div>
            <a href="google.com" target="_blank" style={{ textDecoration: 'none' }}>
              <h3 className={styles.articleTitle}>Transferring Tokens from Axelar to Centrifuge through Moonbeam’s Connected Contracts</h3>
            </a>
            <a href="google.com" target="_blank" style={{ textDecoration: 'none' }}>
              <p style={{ color: '#CCC', textDecoration: 'none', marginBottom: '8px' }}>
                Moonbeam • 12/8/22
              </p>
            </a>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <Tag tag="Solidity" />
              <Tag tag="Polkadot" />
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

