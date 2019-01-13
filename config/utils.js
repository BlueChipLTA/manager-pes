const encode = require('nodejs-base64-encode');
const jwt = require("jsonwebtoken");
var constants = require('../config/contants');

exports._hashPassword = function(password) {
    return encode.encode(password,'base64');
  }

exports.DencodePassword = function(password) {
    return encode.decode(password,'base64');
  }
  
exports.createToken = function(userName) {
    return jwt.sign(userName,constants.JWT_SECRET);
  }

  exports.toAuthJSON = function(userName) {
    return {
      token: this.createToken(userName),
    };
}