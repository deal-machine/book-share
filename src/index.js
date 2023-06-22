import express from 'express';
import routes from "./routes/index.js";
import { setupDatabase } from "./middlewares/setupDatabase.js"

const app = express();
app.use(express.json());
setupDatabase();
app.use(routes);

export default app;