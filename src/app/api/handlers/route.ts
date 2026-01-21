
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  console.debug('api/handlers/route    GET:');
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 200;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');

  console.debug('api/handlers/route    POST:', {id, title, content, date}, request);

  try {
    // SQL query to insert a new post
    const result = await sql`
      INSERT INTO posts (id, title, content, date)
      VALUES (${id}, ${title}, ${content}, ${date})
      `;
      // ON CONFLICT (id) DO NOTHING;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
