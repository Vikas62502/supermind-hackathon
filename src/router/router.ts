import express from "express";
import { db } from "..";
import { dbController } from "../controller/controller";
import { GenerateAndSave } from "../scripts/mockDataGeneration";

const router = express.Router();

router.get("/db", dbController)
router.get("/test", (req, res) => {
    res.send("Hello World")
})

router.post("/mockdata", GenerateAndSave)

export { router };