// // Class Route
// const config = require("../config/liveconfig");
// const express = require("express");
// const bodyParser = require("body-parser");
// // const pino = require("express-pino-logger")();
// const { videoToken } = require("../tokens");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// // app.use(pino);

// const sendTokenResponse = (token, res) => {
//   res.set("Content-Type", "application/json");
//   res.send(
//     JSON.stringify({
//       token: token.toJwt(),
//     })
//   );
// };

// app.get("/api/greeting", (req, res) => {
//   const name = req.query.name || "World";
//   res.setHeader("Content-Type", "application/json");
//   res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
// });

// app.get("/video/token", (req, res) => {
//   const identity = req.query.identity;
//   const room = req.query.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });
// app.post("/video/token", (req, res) => {
//   console.log(req);
//   const identity = req.body.identity;
//   const room = req.body.room;
//   const token = videoToken(identity, room, config);
//   sendTokenResponse(token, res);
// });
