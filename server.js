const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const config = require("config");
const newUsers = require("./routes/api/users");
const loginUser = require("./routes/api/login");
const Goals = require("./routes/api/goals");
const Notes = require("./routes/api/notes");
const webPush = require("web-push");

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

const vapidKeys = webPush.generateVAPIDKeys();
// const publicVapidKey =
//   "BH2v8FAHYiT3n3l3qAQGo_FvJgytwDK2e1d9NJXyReF0TebIyii9prcZXIHHvngLvn6p-Efqc3MOOM6lh3_CQV0";
// const privateVapidKey = "vdBFzfheha8rwQzOZ_ftSvMis4eGci8raSylt1J0Vss";

webPush.setVapidDetails(
  "mailto:aravindanravi33@gmail.com",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Use Routes
app.post("/subscribe", (req, res) => {
  //Get pushSubscription object
  const subscription = req.body;

  //Send 201-resource created
  res.status(201).json({});

  //Create payload
  const payload = JSON.stringify({ title: "Push notification test" });

  //Pass object into sendNotification
  webPush
    .sendNotification(subscription, payload)
    .catch((err) => console.error(err));
});
app.use("/api/users", newUsers);
app.use("/api/users/login", loginUser);
app.use("/api/users/:userId/goal", Goals);
app.use("/api/users/:userId/notes", Notes);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server started at port ${port}`));
