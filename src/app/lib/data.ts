import { createClient, sql, VercelClient } from '@vercel/postgres';

export async function connectToDB() {
  try {
    const client = createClient();
    await client.connect();
    // console.debug('\nConnected to database');
    return client;
  }
  catch (error) {
    console.error('\nDatabase Connection Error:\n', error);
  }
}
//*
export const getPosts = async () => {
  const posts = await sql `SELECT * FROM posts;`;
  // if (!posts)
  //   throw new Error('Failed to fetch posts.');
  console.debug('posts.rows: ', posts.rows);
  return posts.rows;
}
/**/// */