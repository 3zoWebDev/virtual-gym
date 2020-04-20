
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
let PORT = process.env.PORT || 5000;

mongoose
  .connect("mongodb://localhost/virtualgym", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((res) => console.log("mongodb is connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//The Routes for The API
app.use("/api/users/", require("./route/user.route"));
// app.use('/admin' , require('./route/admin.route'));
// app.use("/api/class", require("./route/class.route"));
app.use("/api/class", require("./route/class.route"));

app.get("*", (req, res) =>
  res.json({ error: "Are you lost?", status: 404 }).status(404)
);
app.listen(PORT, () => console.log(`server run on ${PORT}`));
