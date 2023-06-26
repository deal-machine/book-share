import mongoose from "mongoose";

const mongodbHost = process.env.MONGODB_HOST || "localhost";
const mongodbPort = process.env.MONGODB_PORT || "27017";
const mongodbUsername = process.env.MONGO_INITDB_ROOT_USERNAME || "root";
const mongodbPassword = process.env.MONGO_INITDB_ROOT_PASSWORD || "M0nG0";
const mongodbName = process.env.MONGODB_DATABASE || "preacher";

const mongodbUrl = `mongodb://${mongodbUsername}:${mongodbPassword}@${mongodbHost}:${mongodbPort}`;

export const connection = mongoose.connect(mongodbUrl, {
  autoCreate: true,
  dbName: mongodbName,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
