const { tickersModel } = require("../model/ticker");

// Controller for adding a new ticker
const addTicker = async (req, res) => {
  try {
    const newTicker = new tickersModel(req.body); // Assuming the ticker data is sent in the request body
    await newTicker.save();
    return res.status(201).json({
      message: "Ticker added successfully!",
      data: newTicker,
    });
  } catch (error) {
    console.error("Error adding ticker:", error);
    return res.status(500).json({
      message: "Error adding ticker",
      error: error.message,
    });
  }
};

module.exports = addTicker;
