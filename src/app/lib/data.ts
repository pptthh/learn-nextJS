import { createClient } from '@vercel/postgres';

export async function connectToDB() {
    try {
        const client = createClient({
            // connectionString: process.env.POSTGRES_URL,
        });

        await client.connect();
        console.log(
            client ?
            "Connected to DB" :
            "Connection error"
        ); 
        return client;
    }
    catch (error) {
        console.error('Database Connection Error:', error);
    }
}
