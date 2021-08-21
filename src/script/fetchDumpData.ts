import data from "../data.json";
import { LeaderBoardModel } from "../models/leaderModel";
class FetchDumpData{
    async dumpData() {
        try {
            await LeaderBoardModel.insertMany(data);
            console.log("Insertion Done");
        } catch(e){
            console.log("Error while inserting the leaderboard data", e);
        }
        
    }
}

export const fetchDumpData = new FetchDumpData;
