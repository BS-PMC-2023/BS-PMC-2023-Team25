import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./dao/ProductsDAO.js";
import ProdsDAO from "./dao/ProdsDAO.js";
import UsersDAO from "./dao/UsersDAO.js";
import LoansDAO from "./dao/LoansDAO.js";
import PodcastDAO from "./dao/PodcastsDAO.js";
import OpinionDAO from "./dao/OpinionDAO.js";
import StudioDAO from "./dao/StudioDAO.js";

dotenv.config();
const MongoClient = mongodb.MongoClient;

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.MONGO_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await ProductsDAO.injectDB(client);
    await ProdsDAO.injectDB(client);
    await UsersDAO.injectDB(client);
    await LoansDAO.injectDB(client);
    await PodcastDAO.injectDB(client);
    await OpinionDAO.injectDB(client);
    await StudioDAO.injectDB(client);

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
