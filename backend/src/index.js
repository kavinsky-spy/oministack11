const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();



app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/**
 * 
 * GET = select for info from BE
 * POST = write info from BE
 * PUT = override info from BE
 * DELETE = delete info from BE
 */

 /**
  * Parameter types:
  * 
  * Query: param name "?" (?page=3&user=me)
  * Route: identify between a param (something/2/something)
  * Body: json body sent as param
  */
