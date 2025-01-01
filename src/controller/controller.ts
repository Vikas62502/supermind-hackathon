import { Request, Response } from "express";
import { db } from "..";

export const dbController = async (req: Request, res: Response) => {
    const collections = await db.listCollections()

    res.json({message: "Collection List", collections: collections});
}