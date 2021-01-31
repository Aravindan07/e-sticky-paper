const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const newUsers = require("./routes/api/users");
const loginUser = require("./routes/api/login");
const Goals = require("./routes/api/goals");
const Notes = require("./routes/api/notes");
const path = require("path");

app.use(morgan("dev"));

app.use(express.json()); //Replacement for bodyParser.json();

//database config
const db = config.get("MongoURI");

//Connecting to MongoDB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.use("/api/users", newUsers);
app.use("/api/users/login", loginUser);
app.use("/api/users/:userId/goal", Goals);
app.use("/api/users/:userId/notes", Notes);

// Set static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/goal-saver/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "goal-saver", "build", "index.html")
    );
  });
}

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server started at port ${port}`));
