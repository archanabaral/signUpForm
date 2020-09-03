const express = require("express");
const dotenv = require("dotenv");
const connectDataBase = require("./config/db");

//load env variables
dotenv.config({ path: "./config/config.env" });

//connect to database
connectDataBase();

//Route file
const auth = require("./routes/auth");

const app = express();

app.use(express.json());

//Mount Routes
app.use("/api/auth", auth);


const PORT = process.env.port || 4000;

app.listen(PORT, console.log(`server running in port ${process.env.NODE_ENV}`));
