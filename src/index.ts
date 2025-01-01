import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { DataAPIClient } from "@datastax/astra-db-ts";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Initialize the client
const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
const db = client.db(process.env.ASTRA_DB_URI!);

(async () => {
    const colls = await db.listCollections();
    console.log('Connected to AstraDB:', colls);
})();

app.get("/", (req: Request, res: Response) => {
    res.send("Basic Express TypeScript Server");
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});