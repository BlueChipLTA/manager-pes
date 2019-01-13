var db = require('../databases');
var HTTPStatus = require('http-status');
var contant = require ('../config/contants')

exports.getAllComboService = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getListCombo);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.addCombo = async function(req, res) {
    try {       
      var name =  req.body.name;
      var type = req.body.type; 
      var moneyService =  req.body.moneyService;
      var timePlay = req.body.timePlay;   
      await db.query(contant.stringSQL.addCombo,[name,type,money,moneyService,timePlay]);
      return res.status(HTTPStatus.CREATED).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.editMachineMoney = async function(req, res) {
    try {       
      var money =  req.params.money;
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.editMachineMoney,[money,id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.editComboById = async function(req, res) {
    try {
      var name = req.params.name;
      var type = req.params.type;        
      var moneyService =  req.params.amount;
      var money =  req.params.money;
      var timePlay = req.params.timePlay;
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.editComboById,[name,type,money,moneyService,timePlay,id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.deleteCombo = async function(req, res) {
    try {        
      var id = req.params.id;
      const { rows } = await db.query(contant.stringSQL.deleteCombo,[id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
  }

  exports.getComboById = async function(req, res) {
    try {       
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.getComboById,[id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
} 
  