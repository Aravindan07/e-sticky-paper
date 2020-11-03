const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating Schema

const goalSchema = new Schema({
  goalName: { type: String, required: true },
  children: { type: Array },
  createdDate: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Goal", goalSchema);
