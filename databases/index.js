const { Pool } = require('pg')
var constants = require('../config/contants');
const pool = new Pool(constants.stringConnectData);
module.exports = {
  query: (text, params) => pool.query(text, params)
}