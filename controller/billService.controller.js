var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants')

exports.getAllBillService = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getAllBillService);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.addBillService = async function(req, res) {
    try {       
      var money =  req.body.money;
      var amount = req.body.amount; 
      var idBill =  req.body.idBill;
      var idProduct = req.body.idProduct;   
      await db.query(contant.stringSQL.addBillService,[money,amount,idBill,idProduct]);
      const { rows } = await db.query(contant.stringSQL.getIDNewProductBill);
      return res.status(HTTPStatus.CREATED).json(rows[0]);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getMoneyByIDMachineBill = async function(req, res) {
    try {       
      var idBill =  req.params.idBill;
      const { rows } = await db.query(contant.stringSQL.getMoneyByIDMachineBill,[idBill]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.updateAmountProduct = async function(req, res) {
    try {       
      var amount =  req.params.amount;
      var money =  req.params.money;
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.updateAmountProduct,[amount,money,id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getBillServiceWithProduct = async function(req, res) {
    try {       
      var idBill =  req.params.idBill;
      var idProduct =  req.params.idProduct;
      const { rows } = await db.query(contant.stringSQL.getBillServiceWithProduct,[idBill,idProduct]);
      return res.status(HTTPStatus.OK).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.deleteBillSericeById = async function(req, res) {
  try {       
    var id =  req.params.id;
    const { rows } = await db.query(contant.stringSQL.deleteBillSericeById,[id]);
    return res.status(HTTPStatus.OK).json(contant.message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getProductServiceJoinBillServices = async function(req, res) {
  try {       
    var idBill =  req.params.idBill;
    const { rows } = await db.query(contant.stringSQL.getProductServiceJoinBillServices,[idBill]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}