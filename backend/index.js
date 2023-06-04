import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";
import ProductsDAO from "./api/dao/ProductsDAO.js";
import ProdsDAO from "./api/dao/ProdsDAO.js";
import UsersDAO from "./api/dao/UsersDAO.js";
import PodcastDAO from "./api/dao/PodcastsDAO.js";
import OpinionDAO from "./api/dao/OpinionDAO.js";
import StudioDAO from "./api/dao/StudioDAO.js";
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
    await PodcastDAO.injectDB(client);
    await OpinionDAO.injectDB(client);
    await StudioDAO.injectDB(client);
    await LoansDAO.injectDB(client);
<<<<<<< HEAD
=======
    await PodcastDAO.injectDB(client);
    await OpinionDAO.injectDB(client);
    await StudioDAO.injectDB(client);
>>>>>>> e67698292d06f00571dd1aaede4a11ad6c62eb4a

    app.listen(port, () => {
      console.log(`Listening on port ${port}`);
    });
  });
