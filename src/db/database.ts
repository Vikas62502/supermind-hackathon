import { DataAPIClient } from "@datastax/astra-db-ts";

// Initialize the client
const client = new DataAPIClient('AstraCS:gZcOZKHAgWfLTZZbKAhPtzRH:34a5c215a8280846a6a823c9080761551edea34286bb1bef8e7a59917f64e67d');
const db = client.db('https://65887df2-e462-4bb1-80de-0f954183fa44-us-east-2.apps.astra.datastax.com');

(async () => {
    const colls = await db.listCollections();
    console.log('Connected to AstraDB:', colls);
})();

export const database = db;