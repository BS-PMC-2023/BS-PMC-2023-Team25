import express from "express";
import cors from "cors";
import productsRoutes from "./routes/products.routes.js";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.routes.js";
import repairsRoutes from "./routes/repairs.routes.js";

import loansRoutes from "./routes/loans.routes.js";
import managerRoutes from "./routes/manager.routes.js";
import opinionsRoutes from "./routes/opinions.routes.js";
import podcastsRoutes from "./routes/podcasts.routes.js";
import studioRoutes from "./routes/studio.routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/products", productsRoutes);

app.use("/users", usersRoutes);

app.use("/loans", loansRoutes);

app.use("/manager", managerRoutes);

app.use("/reviews", opinionsRoutes);

app.use("/podcasts", podcastsRoutes);

app.use("/studios", studioRoutes);
app.use("/repairs", repairsRoutes);

app.use("*", (req, res) => res.status(404).json({ error: "not found" }));

export default app;
