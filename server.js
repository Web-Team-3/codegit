const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const execSync = require('child_process').execSync;

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//routes


//database connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('connected to Db')
);

//middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//api routes middleware


app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
