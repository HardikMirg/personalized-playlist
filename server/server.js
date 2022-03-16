require("dotenv").config();
const express = require("express");
const bodyParser = require("body-Parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

const clientID = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const refresh = require('./routes/refresh');
const login = require('./routes/login')
const search = require('./routes/search')

app.use('/refresh', refresh);
app.use('/login', login)
app.use('/search', search)

const api = require('./routes/api/api')
app.use('/api', api)

app.listen(8000, () => {
  console.log("Express server running.");
});

module.exports = clientID, clientSecret