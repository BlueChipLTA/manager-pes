'use strict';
var express = require('express');
var constants = require('./config/contants');
var  middleWare = require('./config/middleware');
var app = express();
var cors = require('cors')
const mountRoutes = require('./router')
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, access-control-allow-origin, profilerefid(whatever header you need)");
  res.header("Access-Control-Allow-Credentials",true);
  next();
});
middleWare(app)
mountRoutes(app)

app.get('/', (req, res) => {
    res.send('Hello world!');
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

app.listen(constants.defaultConfig.PORT, err => {
    if (err) {
      throw err;
    } else {
      console.log(`
        Server running on port: ${constants.defaultConfig.PORT}
        ---
        Make something great
      `);
    }
  });