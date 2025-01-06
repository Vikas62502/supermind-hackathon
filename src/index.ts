import express, { Express } from "express";
import dotenv from "dotenv";
import { DataAPIClient } from "@datastax/astra-db-ts";
import { router } from "./router/router";
import { connectToCassandra } from "./lib/cassandraDB.lib";


dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

//Initialize the DataStax Astra client

// const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
// const db = client.db(process.env.ASTRA_DB_URI!)

console.log("Connecting to DB...")
// db.info()
// .then(res => {
//     console.log(`Database ${res.name} is now succesfully connected!! `)
// })
// .catch(err => {
//     console.error("Database Error", err)
//     process.exit(1)
// })

app.use(express.json());
app.use("/api/v1", router)

connectToCassandra()


app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

// export { db }