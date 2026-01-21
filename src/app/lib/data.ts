import { createClient } from '@vercel/postgres';
import { sql } from '@vercel/postgres';
import { unstable_noStore } from 'next/cache';

export async function connectToDB() {
  try {
    const client = createClient();
    await client.connect();
    return client;
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

export async function getPosts() {
  try {
    unstable_noStore();
    const data = await sql `SELECT * FROM posts ORDER BY date DESC LIMIT 200`
    // console.log(data.rows)
    return data.rows;
  } catch (error) {
    console.error('Error getting posts', error);
  }
}
