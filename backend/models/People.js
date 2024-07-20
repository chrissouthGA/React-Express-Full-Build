const mongoose = require("mongoose");
///////////////////////////////
// MODELS
////////////////////////////////
const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String,
  });
  
const People = mongoose.model("People", PeopleSchema);
  
module.exports = People
  