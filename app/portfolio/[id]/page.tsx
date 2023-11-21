import { sql } from "@vercel/postgres";
import { Grid } from "@mui/material";
import { Tag } from "../_components/Tag";
import { MDXRemote } from 'next-mdx-remote/rsc'

import style from "./page.module.css";
import { JSX, ClassAttributes, HTMLAttributes } from "react";
import PageTransition from "../../_components/PageTransition";
import Navigation from "../../_components/Navigation";

const MDXComponents = {
  h1: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className={style['mkdwn-h1']}>{props.children}</h1>
  ),
  p: (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>) => (
    <p {...props} className={style['mkdwn-p']}>{props.children}</p>
  ),
};

type ProjectQuery = {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  images: string[];
  description: string;
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
          <a href="link" className={style.linkButton}>
            CHECK IT OUT	↗
          </a>
          <div className={style.mkdwnContainer}>
            <MDXRemote source={data.description} components={MDXComponents} />
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            alt={data.title}
            src={data.images[0]}
            style={{
              width: '100%', // Makes the image scale to the width of the Grid item
              height: 'auto', // Maintains the aspect ratio of the image
              borderRadius: '16px'
            }}
          />
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