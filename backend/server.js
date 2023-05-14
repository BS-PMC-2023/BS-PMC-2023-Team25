import express from "express";
import cors from "cors";
import products from "./api/products.routes.js";
import bodyParser from "body-parser";
import users from "./api/products.routes.js"
import loans from "./api/products.routes.js"

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use("/", products);
<<<<<<< HEAD
app.use("/users",users);
app.use("/loans",loans);
=======
app.use("*", (req, res) => res.status(404).json({ error: "not found" })); //not defined page
>>>>>>> 0794715e699b25fbd46f412314b8760779019918

app.use("*", (req, res) => res.status(404).json({ error: "not found" })); //not defined page
export default app;
