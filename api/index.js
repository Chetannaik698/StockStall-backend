const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Holdingsroutes = require("./Routes/Holdings");
const Positionsroutes = require("./Routes/Positions");
const OrderRoute = require("./Routes/Orders");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(cookieParser());

// routes
app.use("/", Holdingsroutes);
app.use("/", Positionsroutes);
app.use("/", OrderRoute);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// export as vercel serverless handler
const serverless = require("serverless-http");
module.exports = serverless(app);
