import { NextResponse } from 'next/server';
import {sql} from '@vercel/postgres';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  if (id === null) {
    try {
      const result = await sql`SELECT id, title, tags, tagline, images[1] as image FROM projects`;
      return NextResponse.json(result.rows, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
  else {
    try {
      const result = await sql`SELECT * FROM projects WHERE id='dictater'`;
      return NextResponse.json(result.rows, { status: 200 });
    } catch (error: any) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }
}
