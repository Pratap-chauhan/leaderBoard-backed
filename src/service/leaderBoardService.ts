
import { LeaderBoardModel } from "../models/leaderModel";
class LeaderBoardService {
    async getLeaderBoardData(query) {
        try {
            return LeaderBoardModel.find({}).limit(query.limit).skip((query.page - 1) * query.limit)
        } catch (error) {
            throw new Error(error);
        }
    }
    async totaldataCount() {
        try {
            return LeaderBoardModel.find({}).count();
        } catch (error) {
            throw new Error(error);
        }
    }
}

export const leaderBoardService = new LeaderBoardService;