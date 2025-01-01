import express from "express";
import { db } from "..";
import { dbController } from "../controller/controller";

const router = express.Router();

router.get("/db", dbController)
router.get("/test", (req, res) => {
    res.send("Hello World")
})

export { router };