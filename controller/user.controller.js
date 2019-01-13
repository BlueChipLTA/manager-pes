var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contants = require ('../config/contants')

exports.signUp = async function(req, res) {
    try {       
      var userName =  req.body.userName;
      var passWord =utils._hashPassword(req.body.passWord);
      var permission = req.body.permission;    
      const data = await db.query(contants.stringSQL.insertUser,[userName,passWord,permission]);
      var message = 'Success';
      var token = utils.toAuthJSON(userName);
      return res.status(HTTPStatus.CREATED).json({message,token});
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }

exports.showListUser = async function(req,res) {
    try {
      const { rows } = await db.query(contants.stringSQL.selectUser)
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }   
}

exports.changePasswordById = async function(req,res) {
  try {
    var id  = req.params.id;
    var passWord = utils._hashPassword(req.params.passWord);
    const data = await db.query(contants.stringSQL.updateUser,[passWord,id]);
    var message = 'Change password success';    
    return res.status(HTTPStatus.OK).json(message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.deleteUser = async function(req,res) {
  try {
    var id  = req.params.id;
    const data = await db.query(contants.stringSQL.deleteUser,[id]);    
    return res.status(HTTPStatus.OK);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}