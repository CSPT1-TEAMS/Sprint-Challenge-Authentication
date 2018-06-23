const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
  connectTo: function (database = 'sandbox', host = 'localhost') {
    return mongoose.connect(`mongodb://${host}/${database}`);
  },
};

server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = {
  server,
  corsOptions
};
