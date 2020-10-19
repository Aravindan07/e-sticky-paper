const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('config');
const newUsers = require('./routes/api/users');
const loginUser = require('./routes/api/login');

app.use(morgan('dev'));

app.use(express.json()); //Replacement for bodyParser.json();

//database config
const db = config.get('MongoURI');

//Connecting to MongoDB
mongoose
    .connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log(err));

// Use Routes
app.use('/api/users', newUsers);
app.use('/api/users/login', loginUser);

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server started at port ${port}`));
