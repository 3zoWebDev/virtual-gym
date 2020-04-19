//Server
require("dotenv").config();

//=================
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9000;
const mongoose = require("mongoose");
// middlewares npm i cors
// ===============
app.use(cors());
app.use(express.json());

//--mongodb connection
mongoose.connect(
    "mongodb://localhost/officefullstack",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("mongodb connected!");
    }
  );
// Routes for API
//===================
app.use("/class", require("./route/class.route"));

app.get("*", (req, res) =>
  res.json({ error: "Are you lost?", status: 404 }).status(404)
);

app.listen(PORT, () =>
  console.log(`unleashed on ${PORT}`)
);