import { sql } from '@vercel/postgres';
import React from 'react';


function AddProject() {

  async function createProject(formData: FormData) {
    'use server'

    // The arrays
    const tags = '{' + formData.get('tags')?.toString() + '}';
    const images = '{' + formData.get('images')?.toString() + '}';

    // The strings
    const id = formData.get('id')?.toString();
    const title = formData.get('title')?.toString();
    const tagline = formData.get('tagline')?.toString();
    const description = formData.get('description')?.toString();
    const link = formData.get('link')?.toString();
 
    await sql`
    INSERT INTO projects (id, title, tags, tagline, images, description, link)
    VALUES (${id}, ${title}, ${tags}, ${tagline}, ${images}, ${description}, ${link})`;
  }

  return (
    <form style={{ display: 'block', margin: '5rem' }} action={createProject}>  
      <input type="text" name="id" placeholder="ID" style={{ display: 'block', marginBottom: '1rem' }} />
      <input type="text" name="title" placeholder="Title" style={{ display: 'block', marginBottom: '1rem', width: '800px'  }} />
      <input type="text" name="tagline" placeholder="Tagline" style={{ display: 'block', marginBottom: '1rem', width: '800px'  }} />
      <textarea name= "description"  placeholder='Markdown description' style={{ display: 'block', marginBottom: '1rem', height: '500px', width: '800px'  }} />
      <input type="text" name="images" placeholder="Images (comma-separated)" style={{ display: 'block', marginBottom: '1rem', width: '800px' }} />
      <textarea name="tags" placeholder="Tags (comma-separated)" style={{ display: 'block', marginBottom: '1rem', width: '800px'  }} />
      <input type="text" name="link" placeholder="Link" style={{ display: 'block', marginBottom: '1rem', width: '800px'  }}  />
      <button type="submit" style={{ padding: '1em' }} >Add Project</button>
    </form>
  );
}



const Placeholder = () => {
  // Placeholder content for production
  return <div color='white'>This page is not available.</div>;
};

export default process.env.NODE_ENV === 'development' ? AddProject : Placeholder;
