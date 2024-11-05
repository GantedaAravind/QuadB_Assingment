const mongoose = require("mongoose");

// Define the schema
const tickerSchema = new mongoose.Schema({
  base_unit: { type: String, required: true },
  quote_unit: { type: String, required: true },
  low: { type: String, required: true },
  high: { type: String, required: true },
  last: { type: String, required: true },
  type: { type: String, required: true },
  open: { type: String, required: true },
  volume: { type: String, required: true },
  sell: { type: String, required: true },
  buy: { type: String, required: true },
  at: { type: Number, required: true }, // Assuming 'at' is a timestamp
  name: { type: String, required: true },
});

// Create the model
const tickersModel = mongoose.model("tickers", tickerSchema);

// Export the model
module.exports = {tickersModel};
