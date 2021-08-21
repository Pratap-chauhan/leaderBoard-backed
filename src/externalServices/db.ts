import { connect } from "mongoose";
import { fetchDumpData } from "../script/fetchDumpData";
class DBConnection {
  init() {
    return connect("mongodb://localhost:27017/leaderboard", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .then( async() => {
        console.log(`DB: Connected to`);
        await fetchDumpData.dumpData();
      })
      .catch((error) => {
        console.log("Mongoose failed to connect to MongoDB.");
        console.error("Mongoose connection error: ", error);
        process.exit(0);
      });
  }
}

export const db = new DBConnection()