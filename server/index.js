const express = require('express');
const server = express();
require('dotenv').config();
const bodyParser = require('body-parser');

server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(bodyParser.json());

server.listen(process.env.SERVER_PORT, () => {
  console.log(`Server start: localhost:${process.env.SERVER_PORT}`);
});
