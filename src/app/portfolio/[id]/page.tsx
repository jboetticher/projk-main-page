import { sql } from "@vercel/postgres";

type ProjectQuery = {
  id: string;
  title: string;
  tags: string[];
  tagline: string;
  images: string[];
  description: string;
}

const ProjectPage = async ({ params }: { params: { id: string } }) => {

  // const DICTATER = 'dictater';
  const data: ProjectQuery = (await sql`SELECT * FROM projects WHERE id = ${params.id}`).rows[0] as ProjectQuery;

  return (
    <div>
      <h1>{data.title}</h1>
      <img alt={data.title} src={data.images[0]} />
      <div>
        {data.tags.map((x, i) => <p key={i}>{x}</p>)}
      </div>
      <p>{data.description}</p>
    </div>
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