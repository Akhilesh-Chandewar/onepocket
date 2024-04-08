import express, { Request, Response } from "express";
const app = express();

import { config } from "dotenv";
config()

app.use(express.json());

app.get("*", (req:Request, res:Response) => {
    res.send("Hello, World!");
});

export default app;