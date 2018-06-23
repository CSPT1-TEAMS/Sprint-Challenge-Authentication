const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./api/routes/routes');

const server = express();
// const corsOptions = {
//   // If you're moving onto the stretch problem you'll need to set this obj with the appropriate fields
//   // ensure that your client's URL/Port can achieve a Handshake
//   // then pass this object to the cors() function
//   origin: 'http://localhost:5000',
//   optionsSuccessStatus: 200
// };

// server.connectTo('AuthSprint')
//   .then(() => {
//     console.log('\n... API Connected to authsprint Database ...\n');
//     server.listen(5000, () =>
//       console.log('\n=== API running on port 5500 ===\n')
//     );
//   })
//   .catch(err => {
//     console.log('\n*** ERROR Connecting to MongoDB, is it running? ***\n', err);
//   });

server.use(bodyParser.json());
server.use(cors());

routes(server);

module.exports = {
  server
};
