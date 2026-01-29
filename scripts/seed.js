// const { db } = require("@vercel/postgres");
import { Pool, neon } from '@neondatabase/serverless';
const { posts } = require("../src/app/lib/placeholder-data.js");

const sql = neon(process.env.DATABASE_URL);

async function seedPosts(client) {
  try {
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await sql`
      CREATE TABLE IF NOT EXISTS posts (
        id UUID DEFAULT uuid_generate_v1mc() PRIMARY KEY,
        author VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL UNIQUE,
        content TEXT NOT NULL,
        date TEXT NOT NULL
      );
    `;

    console.log(`Created "posts" table`);

    // Insert data into the "posts" table
    const insertedPosts = await Promise.all(
      posts.map(async (post) => {
        return sql`
        INSERT INTO posts (id, title, content, date, author)
        VALUES (${post.id}, ${post.title}, ${post.content}, ${post.date}, ${post.user})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );
    console.log(`Seeded ${insertedPosts.length} posts articles`);

    return {
      createTable,
      posts: insertedPosts,
    };
  } catch (error) {
    console.error("Error seeding posts:", error);
    throw error;
  }
}

async function main() {
  // const client = await db.connect();
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  await seedPosts(pool);
  await pool.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
