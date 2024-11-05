const { tickersModel } = require("../model/ticker");

// Controller for getting all tickers
const getAllTickers = async (req, res) => {
  try {
    const tickers = await tickersModel.find(); // Fetch all tickers from the database
    return res.status(200).json(tickers);
  } catch (error) {
    console.error("Error retrieving tickers:", error);
    return res.status(500).json({
      message: "Error retrieving tickers",
      error: error.message,
    });
  }
};

module.exports = getAllTickers;
