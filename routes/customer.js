const express = require("express");
const router = express.Router();

const Order = require("../models/order.schema");

//placing an order
router.post("/", async (req, res) => {
  const {
    name,
    phone,
    address,
    orderItems,
    orderQuantity,
    itemTotal,
    deliveryCharge,
    taxes,
    cookingInstructions,
    table,
    orderType,
    orderStatus,
    createdAt,
    completedAt,
  } = req.body;
  try {
    const order = await Order.create({
      name,
      phone,
      address,
      orderItems,
      orderQuantity,
      itemTotal,
      deliveryCharge,
      taxes,
      cookingInstructions,
      table,
      orderType,
      orderStatus,
      createdAt,
      completedAt,
    });
    console.log(order);
    res.status(201).send(order);
  } catch (err) {
    console.log(`Unable to create order ${err}`);
  }
});

router.get("/", async (req, res) => {
  try {
    const orders = await Order.find();
    console.log(orders);
    res.status(200).json(orders);
  } catch (err) {
    console.log(`Unable to fetch orders: ${err}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});
module.exports = router;
