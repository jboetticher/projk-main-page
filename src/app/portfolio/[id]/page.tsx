import { sql } from "@vercel/postgres";
import { Grid } from "@mui/material";
import { Tag } from "../_components/Tag";
import glitchStyle from "../../_styles/glitch.module.css";

type ProjectQuery = {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  images: string[];
  description: string;
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {
  const data: ProjectQuery = (await sql`SELECT * FROM projects WHERE id = ${params.id}`).rows[0] as ProjectQuery;

  return (
    <main style={{ overflow: 'hidden' }}>
      <Grid container spacing={2} sx={{ padding: '16px', paddingLeft: '32px', paddingRight: '32px' }}>
        <Grid item xs={12} sm={6}>
          <h1 style={{ fontSize: '40px', color: 'white' }}>
            {data.title}
          </h1>
          <div>
            {data.tags.map((t, i) => <Tag key={i} tag={t} />)}
          </div>
          <a href="link">
            Link goes here yay
          </a>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img alt={data.title} src={data.images[0]} style={{ borderRadius: '16px' }} />
        </Grid>
        <Grid item xs={12}>
          <p>{data.description}</p>
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