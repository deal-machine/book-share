import app from "./src/index.js";

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express server running on port ${port}`));