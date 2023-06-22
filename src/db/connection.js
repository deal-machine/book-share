import mongoose from "mongoose";

const mongodbHost =  process.env.MONGODB_HOST || 'localhost'
const mongodbPort = process.env.MONGODB_PORT || '27017'
const mongodbUsername = process.env.MONGO_INITDB_ROOT_USERNAME || 'root'
const mongodbPassword = process.env.MONGO_INITDB_ROOT_PASSWORD || 'M0nG0'
const mongodbName = ''

const mongodbUrl = `mongodb://${mongodbUsername}:${mongodbPassword}@${mongodbHost}:${mongodbPort}/${mongodbName}`;

export const connection = mongoose.connect(mongodbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
                            
