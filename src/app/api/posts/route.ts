
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  unstable_noStore();
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date LIMIT 200;`;
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

  try {
    // SQL query to insert a new post
    // await sql `INSERT INTO posts (id, title, content, date) VALUES (${id}, ${title}, ${content}, ${date})`;
    const post = await sql `INSERT INTO posts (id, author, title, content, date) VALUES (${id}, 'Péter', ${title}, ${content}, ${date});`;
    console.log('Inserted post:', post);
    return NextResponse.json({ result: post, message: 'Post successfully inserted' }, { status: 200 });
  } catch (error) {
    console.log('Error inserting post:', error);
    return NextResponse.json({ error }, { status: 500 });
  }
}

