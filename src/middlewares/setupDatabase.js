import { connection } from "../db/connection.js";

export const setupDatabase = () => {
  connection
    .then((connection) => {
      console.log(`successful connection on ${connection.connection.name}`);
      return connection;
    })
    .catch((error) => console.error(error));
};
