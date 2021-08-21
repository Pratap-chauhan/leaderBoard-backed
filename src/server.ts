var express = require('express');
var app = express();
import { db } from "./externalServices/db";
import { leaderBoard } from "./controllers/leaderBoard";
import bodyParser from "body-parser";
var cors = require('cors');


app.use(bodyParser.json({ limit: "25mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "25mb" }));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
})

app.get("/api/leaderboard", leaderBoard.getLeaderBoard);


app.listen(3000, async () => {
  console.log(`Server started at Port 3000`)
  await db.init()
});






