const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema

const userSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  createdDate: { type: Date, default: Date.now() },
  goals: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      mainGoalName: { type: String, required: true },
      userGoals: [
        {
          _id: mongoose.Schema.Types.ObjectId,
          goalName: String,
          children: [
            { checked: { type: Boolean, default: false }, child: String },
          ],
        },
      ],
    },
  ],
  notes: [
    {
      _id: mongoose.Schema.Types.ObjectId,
      NoteName: { type: String, default: "Untitled" },
      notes: { type: String },
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
