const mongoose = require("mongoose");
const { ordersSchema } = require("../schemas/OrdersSchema");

// Use mongoose.model() directly — no `new`
const OrdersModel = mongoose.model("order", ordersSchema);

module.exports = { OrdersModel };
