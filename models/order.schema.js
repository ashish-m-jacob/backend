//Model for order placed - to be sent from user

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  orderItems: { type: [String], required: true },
  orderQuantity: { type: [Number], required: true },
  itemTotal: { type: Number, required: true },
  deliveryCharge: { type: Number },
  taxes: { type: Number, required: true },
  cookingInstructions: { type: String },
  orderType: { type: String, required: true }, //dinein or takeout
  orderStatus: { type: String, default: "preparing" },
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", orderSchema);
