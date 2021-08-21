"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaderBoardModel = void 0;
var mongoose_1 = require("mongoose");
var LeaderBoardSchema = new mongoose_1.Schema({
    Rank: { type: Number, required: true },
    Name: { type: String, required: true },
    Platform: { type: String, required: true },
    Year: { type: Number },
    Genre: { type: String, required: true },
    Publisher: { type: String, required: true },
    Global_Sales: { type: Number, required: true },
});
exports.LeaderBoardModel = mongoose_1.model('Leaderboard', LeaderBoardSchema);
