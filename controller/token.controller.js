var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants')
var notification = require ('../config/Notification');

exports.getListToken = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getListToken,[2]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.addToken = async function(req, res) {
    try {       
      var token =  req.body.token;
      var permission = req.body.permission;    
      await db.query(contant.stringSQL.addToken,[token,permission]);
      return res.status(HTTPStatus.CREATED).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
