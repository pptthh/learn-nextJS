'use server';
// import { sql } from '@vercel/postgres';    //  https://neon.com/guides/vercel-sdk-migration
// import { createClient, sql } from '@vercel/postgres';
import { neon, Pool } from '@neondatabase/serverless';

import { unstable_noStore as noStore } from 'next/cache';

const sql = neon(process.env.DATABASE_URL || '');

export async function connectToDB() {
  // const client = createClient();
  // await client.connect();
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });

  try {
    if (pool) {
      return pool;
    }
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

export async function getPosts() {
  try {
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const rows = await sql`SELECT * FROM posts ORDER BY title DESC`;
    return rows;
  } catch (error) {
    console.error('Error getting posts', error);
  }
}

