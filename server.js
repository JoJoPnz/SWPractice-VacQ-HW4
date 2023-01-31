const express = require("express");
const dotenv = require("dotenv");

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

//Route files
const hospitals = require("./routes/hospitals");
//Mount routers
app.use("/api/v1/hospitals", hospitals);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log("Server running in", process.env.NODE_ENV, "mode on port", PORT)
);