import express from "express";
// import { db } from "..";
// import { dbController } from "../controller/controller";
import { GenerateAndSave } from "../scripts/mockDataGeneration";
import { client } from "../lib/cassandraDB.lib";

const router = express.Router();

// router.get("/db", dbController)
router.get("/test", (req, res) => {
    res.send("Hello World")
})

router.get("/get-stats", async (req, res) => {
    try {
        const query = "SELECT * FROM chailytics.summary";
        const result = await client.execute(query);
        console.log(result);
        res.status(200).json({ data: query, result });
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

router.post("/mockdata", GenerateAndSave)

export { router };