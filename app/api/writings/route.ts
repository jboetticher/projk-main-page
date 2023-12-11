import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export const revalidate = 120;
export async function GET(request: Request) {
  try {
    const result = await sql`SELECT * FROM writings ORDER BY date DESC;`;
    return NextResponse.json(result.rows, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
