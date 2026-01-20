import { createClient } from '@vercel/postgres';

export async function connectToDB() {
    try {
        const client = createClient();
        await client.connect();
        return client;
    }
    catch (error) {
        console.error('\nDatabase Connection Error:\n', error);
    }
}
