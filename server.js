const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./api/utils/db')
const routes = require('./api/routes/routes');

const server = express();
const corsOptions = {
  // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
  // ensure that your client's URL/Port can achieve a Handshake
  // then pass this object to the cors() function
  // origin: 'http://localhost:5000',
  // optionsSuccessStatus: 200
};

server.use(bodyParser.json());
server.use(cors());

routes(server); 

db.connectTo('AuthSprint')
  .then(() => {
    console.log('\n... API Connected to AuthSprint Database ...\n');
    server.listen(5000, () =>
      console.log('\n=== API running on port 5000 ===\n')
    );
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to MongoDB, is it running? ***\n', err);
  });



module.exports = {
  server
};
