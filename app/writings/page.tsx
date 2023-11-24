import PageTransition from "../_components/PageTransition";
import Navigation from "../_components/Navigation";
import glitchStyle from "../_styles/glitch.module.css";
import styles from "./page.module.css";
import { Tag } from "../portfolio/_components/Tag";

// This allows for server side, otherwise I would do it within useEffect
async function getData(): Promise<Writing[]> {
  const res = await fetch('https://projk-main-page.vercel.app/api/writings')
  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json() as Promise<Writing[]>
}

type Writing = {
  id: number,
  title: string,
  icon: string,
  tags: string[],
  date: string,
  link: string,
  source: string
};

function getDateFormatted(writing: Writing) {
  const date = new Date(writing.date);
  let day = writing.date.substring(8, 10).padStart(1, '0'); // Months are zero-based
  let month = writing.date.substring(5, 7); // Months are zero-based
  let year = date.getFullYear().toString().slice(-2);

  return `${day}/${month}/${year}`;
  // 2023-02-07T00:00:00.000Z
}

export default async function Writings() {

  const data: Writing[] = await getData();

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <Navigation />
      <div className={styles.scrollBox}>
        <div className={styles.titleBox}>
          <h1 data-text={"WRITINGS"}
            className={glitchStyle.glitch}
            style={{ fontSize: 60 }}
          >
            WRITINGS
          </h1>
        </div>
        <p style={{ color: '#CCC', textAlign: 'center', padding: '0 16px 32px 16px' }}>
          A collection of the articles that I've written. I / Projk LLC may not have the rights to the content, as they are likely for other companies.
        </p>
        <section className={styles.articleContainer}>
          {data.map((w, i) => (
            <article className={styles.article} key={i}>
              <a href={w.link} target="_blank" style={{ textDecoration: 'none' }}>
                <img src={w.icon} height={60} width={60} style={{ marginRight: '16px' }} />
              </a>
              <div>
                <a href={w.link} target="_blank" style={{ textDecoration: 'none' }}>
                  <h3 className={styles.articleTitle}>{w.title}</h3>
                </a>
                <a href={w.link} target="_blank" style={{ textDecoration: 'none' }}>
                  <p style={{ color: '#CCC', textDecoration: 'none', marginBottom: '8px' }}>
                    {w.source} • {getDateFormatted(w)}
                  </p>
                </a>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  {w.tags.map((tag, t_i) => <Tag tag={tag} key={i + '_' + t_i} />)}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

