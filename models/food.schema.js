const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  category: { type: String, required: true },
  name: { type: String, required: true },
  img: { type: String, required: true },
  price: { type: String, required: true },
  time: { type: String },
});

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
