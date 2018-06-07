const express = require('express');
const app = express();
// const session = require('express-session');
const http = require('http');
const server = http.createServer(app);
require('dotenv').config();
const errorHandler = require("./middleware/error-handler");
const errorMessage = require("./middleware/error-message");
const accessControls = require("./middleware/access-controls");

// connection to  PG DB

const  { Client } = require('pg');

const client = new Client({
  user: process.env.PGUser,
  host: process.env.PGHost,
  database: process.env.PGDatabase,
  password: process.env.PGPassword,
  port: process.env.PGPort
})

client.connect();

// Requiring Routes

const sampleRoutes = require('./routes/sample.routes');
const userRoutes = require('./routes/users.routes');


//////


const fs = require('fs');
fs.readdirSync(__dirname + "/models").forEach(function(file) {
    require(__dirname + "/models/" + file);
});

app.use(express.static("public"));

app.set('port', (process.env.PORT || 3000));

app.use(accessControls);

// Routes which should handle requests
app.use("/sample", sampleRoutes);
app.use("/users", userRoutes);

app.use(errorHandler);

app.use(errorMessage);

server.listen(app.get('port'));
console.log('listening on port',app.get('port'));
