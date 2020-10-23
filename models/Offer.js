const mongoose = require("mongoose");

const Offer = mongoose.model("Offer", {
  product_name: { type: String, max: 50 },
  product_description: { type: String, max: 500 },
  product_price: { type: Number, max: 10000 },
  product_details: Array,
  product_image: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  product_pictures: Array,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = Offer;
