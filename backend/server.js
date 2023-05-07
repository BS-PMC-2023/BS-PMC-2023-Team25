import express from "express";
import cors from "cors";
import Myapp from "./api/app.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", Myapp);
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); //not defined page

export default app;
