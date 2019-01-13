var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants');

exports.getListMachineBillAndIdMachine = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getListMachineBillAndIdMachine);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListMachineMoneyWithMachineId = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getListMachineMoneyWithMachineId);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListMachineMoneyWithMachineIdLastTime = async function(req, res) {
    try {
      var timeEnd = req.params.timeEnd;              
      const { rows } = await db.query(contant.stringSQL.getListMachineMoneyWithMachineIdLastTime,[timeEnd]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListMachineMoneyWithMachineIdDuringTime = async function(req, res) {
    try {
      var timeStart = req.params.timeStart;
      var timeEnd = req.params.timeEnd;              
      const { rows } = await db.query(contant.stringSQL.getListMachineMoneyWithMachineIdDuringTime,[timeStart,timeEnd]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}


exports.getListSumMoneyAndMachineIdDuringTime = async function(req, res) {
    try {
      var timeStart = req.params.timeStart;
      var timeEnd = req.params.timeEnd;              
      const { rows } = await db.query(contant.stringSQL.getListSumMoneyAndMachineIdDuringTime,[timeStart,timeEnd]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListSumMoneyAndMachineIdLastTime = async function(req, res) {
    try {
      var timeEnd = req.params.timeEnd;              
      const { rows } = await db.query(contant.stringSQL.getListSumMoneyAndMachineIdLastTime,[timeEnd]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}
  
  