import { model, Schema, Model, Document } from 'mongoose';


interface ILeaderBoardModel extends Document {
    "Rank": number,
    "Name": string,
    "Platform": string,
    "Year": number | string,
    "Genre": string,
    "Publisher": string,
    "Global_Sales": number
}
const LeaderBoardSchema: Schema = new Schema({
    Rank: { type: Number, required: true },
    Name: { type: String, required: true },
    Platform: { type: String, required: true },
    Year: { type: Number},
    Genre: { type: String, required: true },
    Publisher: { type: String, required: true },
    Global_Sales: { type: Number, required: true },
});

export const LeaderBoardModel: Model<ILeaderBoardModel> = model('Leaderboard', LeaderBoardSchema);