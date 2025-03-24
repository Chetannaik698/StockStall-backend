const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const Holdingsroutes = require("./Routes/Holdings");
const Positionsroutes = require("./Routes/Positions");
const OrderRoute = require("./Routes/Orders");
require("dotenv").config();
const MONGO_URL = process.env.MONGO_URL;
const port = 8080;
const cookieParser = require("cookie-parser");
const AuthRouter = require("./Routes/AuthRouter");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(cookieParser());

app.get("/", (req,res) => {
  res.send("server is working fine");
})
app.use("/", Holdingsroutes);
app.use("/", Positionsroutes);
app.use("/",  OrderRoute);
app.use('/', AuthRouter);
