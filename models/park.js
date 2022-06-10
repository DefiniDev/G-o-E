const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ParkSchema = new Schema({
  title: String,
  location: String,
});

module.exports = mongoose.model("Park", ParkSchema);
