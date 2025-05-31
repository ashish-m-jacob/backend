const express = require("express");
const router = express.Router();
const Food = require("../models/food.schema");

//Fetching all food items
router.get("/", async (req, res) => {
  console.log("Query Parameters:", req.query.category);

  try {
    const categoryItems = await Food.find({ category: req.query.category });
    res.status(200).send(categoryItems);
  } catch (err) {
    console.log(`Unable to fetch food items: ${err}`);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
