const express = require("express");
const path = require("path");
const logger = require("./middleware/logger");
const app = express();

// init middleware
// app.use(logger);

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//get all member


const PORT = process.env.PORT || 5000;

// set a static folder

app.use(express.static(path.join(__dirname, "public")));

app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
