import { sql } from "@vercel/postgres";
import { Grid } from "@mui/material";
import { Tag } from "../_components/Tag";
import { MDXRemote } from 'next-mdx-remote/rsc'

import style from "./page.module.css";
import PageTransition from "../../_components/PageTransition";
import Navigation from "../../_components/Navigation";
import ImageContainer from "./_components/ImageContainer";

const MDXComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={style['mkdwn-h1']}>{props.children}</h1>
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className={style['mkdwn-p']}>{props.children}</p>
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className={style['mkdwn-h3']}>{props.children}</h3>
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className={style['mkdwn-ul']}>{props.children}</ul>
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className={style['mkdwn-li']}>{props.children}</li>
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} className={style['mkdwn-img']} />
  ),
};

type ProjectQuery = {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  images: string[];
  description: string;
  link: string;
};

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const data: ProjectQuery = (await sql`SELECT * FROM projects WHERE id = ${params.id}`).rows[0] as ProjectQuery;

  // TODO: replace Grid with static elements

  return (
    <main style={{ overflow: 'hidden' }}>
      <PageTransition />
      <Navigation />
      <Grid container spacing={2} sx={{ padding: '16px', paddingLeft: '32px', paddingRight: '32px' }}>
        <Grid item xs={12} sm={6}>
          <h1 style={{ fontSize: '40px', color: 'white', marginBottom: '12px' }}>
            {data.title}
          </h1>
          <div>
            {data.tags.map((t, i) => <Tag key={i} tag={t} />)}
          </div>
          <div className={style.displayOnMobile}>
            <ImageContainer images={data.images} title={data.title} />
          </div>
          <a href={data.link} className={style.linkButton} target="_blank">
            CHECK IT OUT	↗
          </a>
          <div className={style.mkdwnContainer}>
            <MDXRemote source={data.description} components={MDXComponents} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} className={style.hideOnMobile}>
          <ImageContainer images={data.images} title={data.title} />
        </Grid>
      </Grid>
    </main>
  );

};

export default ProjectPage;

export async function generateStaticParams() {
  const posts = await fetch('https://projk-main-page.vercel.app/api/projects')
    .then((res) => res.json());

  return posts.map((post: { id: string }) => ({
    id: post.id,
  }))
}