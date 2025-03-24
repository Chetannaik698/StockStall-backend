const express = require("express");
const OrderModel = require("../Models/OrdersModel");

const router = express.Router();

router.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    const placed = await newOrder.save();
    res.status(200).json({message: "Order Placed Successfully"})
    console.log(placed);
    
  } catch (err) {
    console.log(err);
  }
});

router.get("/getOrders", async(req,res) => {
  const allOrder = await OrderModel.find({});
  res.send(allOrder);
  console.log(allOrder);
})

module.exports = router;