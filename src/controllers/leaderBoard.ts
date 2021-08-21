import { leaderBoardService } from "../service/leaderBoardService";
import { Response , Request } from  "express"
class LeaderBoard {
    async getLeaderBoard(req: Request, res: Response) {
        try {
            const page= req.query?.page;
            const limit = req.query?.limit;
            const buildQuery =  {
                page:  page || 1,
                limit: limit || 9
            }
            const result = await leaderBoardService.getLeaderBoardData(buildQuery);
            const totalCount = await leaderBoardService.totaldataCount();
            res.status(200)
            res.json({
                data: result,
                pagination:{
                    currentPage : Number(buildQuery.page),
                    limit: buildQuery.limit,
                    totalPage: Math.ceil(totalCount/Number(buildQuery.limit))
                }
            });
        } catch (error) {
            res.status(500)
            res.json({
                data: {
                    message: 'Internal Serve Error',
                }
            });
        }
    }   
}

export const leaderBoard = new LeaderBoard;