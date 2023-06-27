import express from "express";
import routes from "./routes/index.js";
import { setupDatabase, publicDir } from "./middlewares/index.js";

const app = express();
app.use(express.json());
setupDatabase();
app.use(express.static(publicDir));
app.use(routes);

export default app;
