import express from "express";
import { db } from "..";
import { dbController } from "../controller/controller";

const router = express.Router();

router.get("/db", dbController)

export { router };