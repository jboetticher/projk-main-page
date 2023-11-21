import { sql } from "@vercel/postgres";

const ProjectPage = async ({ params }: { params: { id: string } }) => {

  // const DICTATER = 'dictater';
  const data = (await sql`SELECT * FROM projects WHERE id = 'dictater'`).rows[0];

  return (
    <div>
      <h1>Portfolio Item: {params.id}</h1>
      <div>ID: {data.id}</div>
    </div>
  );
};

export default ProjectPage;
