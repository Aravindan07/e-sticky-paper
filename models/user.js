const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now() },
  goals: [
    { _id: mongoose.Schema.Types.ObjectId, goalName: String, children: Array },
  ],
});

module.exports = mongoose.model("User", userSchema);
