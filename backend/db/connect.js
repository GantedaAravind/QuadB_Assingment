const mongoose = require("mongoose");

async function connectTODatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MONGODB connected Successfully...🤟");
  } catch (error) {
    console.log(error);
    throw new Error("Cannot connect to MONGODB...😯");
  }
}

async function disConnectTODatabase() {
  try {
    await mongoose.disconnect();
    console.log("MONGODB disconnected Successfully...🥰"); // Corrected message
  } catch (error) {
    console.log(error);
    throw new Error("Cannot disconnect from MONGODB...😯"); // More appropriate error message
  }
}

module.exports = { connectTODatabase, disConnectTODatabase }; // Exporting both functions
