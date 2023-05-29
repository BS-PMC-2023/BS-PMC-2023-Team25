import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.routes.js";
import loansRoutes from "./routes/loans.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/", productsRoutes);
app.use("/users", usersRoutes);
app.use("/loans", loansRoutes);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
