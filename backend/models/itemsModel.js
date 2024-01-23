const mongoose = require("mongoose");

const itemSchema = mongoose.Schema(
  {
    itemName: { type: String, required: true },
    itemNo: { type: String, required: true, unique: true },
    itemCategory: { type: String, required: true },
    itemPrice: { type: Number, required: true },
    itemPic: { type: String, required: true, default: "default_item_pic.jpg" },
    itemQuantity: { type: Number, default: 0 },
    billNo: { type: String, required: true },
    gst: { type: Number, required: true },
    brandName: { type: String },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
