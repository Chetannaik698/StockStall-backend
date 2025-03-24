const express = require("express");
const PositionsModel = require("../Models/PositionsModel");
const { route } = require("./Holdings");

const router = express.Router();

// router.get("/allPositions", async(req, res) => {
//   const tempPositions = [
//     {
//       product: "CNC",
//       name: "EVEREADY",
//       qty: 2,
//       avg: 316.27,
//       price: 312.35,
//       net: "+0.58%",
//       day: "-1.24%",
//       isLoss: true,
//     },
//     {
//       product: "CNC",
//       name: "JUBLFOOD",
//       qty: 1,
//       avg: 3124.75,
//       price: 3082.65,
//       net: "+10.04%",
//       day: "-1.35%",
//       isLoss: true,
//     },
//   ];

//   const result = await PositionsModel.insertMany(tempPositions);
//   res.send("data aded successfully");
//   console.log(result);
// });

router.get("/getPositions", async(req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions)
    console.log(allPositions);
})

module.exports = router;
