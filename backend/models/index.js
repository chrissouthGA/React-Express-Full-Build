const mongoose = require("mongoose");
const {DATABASE_URL} = process.env
///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Async function to connect to Mongo
async function connectToMongo() {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log('The connection with mongodb is established');
  } catch (err) {
    console.error('Connection error:', err.message);
  }
}

// Execute the connection
connectToMongo();

module.exports = {
    People: require('./People')
}