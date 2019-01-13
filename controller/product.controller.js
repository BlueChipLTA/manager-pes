var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants')

exports.insertProduct = async function(req, res) {
    try {
      var name =  req.body.name;
      var price = req.body.price;    
      var amount = req.body.amount; 
      var active = req.body.active;  
      var type = req.body.type;
      var priceBuy = req.body.pricebuy;      
      await db.query(contant.stringSQL.insertProdcut,[name,price,amount,active,type,priceBuy]);
      const { rows } = await db.query(contant.stringSQL.getIDNewProduct);
      return res.status(HTTPStatus.CREATED).json(rows[0]);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListProduct = async function(req, res) {
  try {              
    const { rows } = await db.query(contant.stringSQL.selectProduct);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}


exports.selectProductById = async function(req, res) {
  try {
    var id = req.params.id;              
    const { rows } = await db.query(contant.stringSQL.selectProductById,[id]);
    return res.status(HTTPStatus.OK).json(rows[0]);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updateAmountByID = async function(req, res) {
  try {  
    var id = req.params.id;
    var amount = req.params.amount;           
    const { rows } = await db.query(contant.stringSQL.updateAmountByID,[amount,id]);
    return res.status(HTTPStatus.OK).json(contant.message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updateProduct = async function(req, res) {
  try {  
    var id = req.params.id;
    var name =  req.body.name;
      var price = req.body.price;    
      var amount = req.body.amount; 
      var type = req.body.type;
      var priceBuy = req.body.priceBuy;                    
    const { rows } = await db.query(contant.stringSQL.updateProduct,[name,amount,price,type,priceBuy,id]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updatePriceByID = async function(req, res) {
  try {  
    var price = req.body.price;  
    var id = req.params.id;   
    console.log(id+" "+price);      
    const { rows } = await db.query(contant.stringSQL.updatePriceByID,[price,id]);
    return res.status(HTTPStatus.OK).json(contant.message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getPriceById = async function(req, res) {
  try {  
    var id = req.params.id;       
    const { rows } = await db.query(contant.stringSQL.getPriceById,[id]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updateProductisAcivte = async function(req, res) {
  try {  
    var id = req.params.id;
    var active = req.params.active;       
    const { rows } = await db.query(contant.stringSQL.updateProductisAcivte,[active,id]);
    return res.status(HTTPStatus.OK).json(contant.message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectProductISActive = async function(req, res) {
  try {        
    const { rows } = await db.query(contant.stringSQL.selectProductISActive);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectNameProductAmount = async function(req, res) {
  try {        
    const { rows } = await db.query(contant.stringSQL.selectNameProductAmount);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectProductByType = async function(req, res) {
  try {        
    var type = req.params.type;
    const { rows } = await db.query(contant.stringSQL.selectProductByType,[type]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectMoneyMachine = async function(req, res) {
  try {   
    var type = req.params.type;
    if (type === 1){
      const { rows } = await db.query(contant.stringSQL.selectMoneyMachine);
      return res.status(HTTPStatus.OK).json(rows);
    } else if (type === 2) {
      const { rows } = await db.query(contant.stringSQL.selectMoneyMachine2VS2);
      return res.status(HTTPStatus.OK).json(rows);
    }
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectMoneyMachine = async function(req, res) {
  try {   
    var type = req.params.type;
    if (type === 1){
      const { rows } = await db.query(contant.stringSQL.selectMoneyMachine);
      return res.status(HTTPStatus.OK).json(rows);
    } else if (type === 2) {
      const { rows } = await db.query(contant.stringSQL.selectMoneyMachine2VS2);
      return res.status(HTTPStatus.OK).json(rows);
    }
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.selectALLMoneyMachine = async function(req, res) {
  try {   
      const { rows } = await db.query(contant.stringSQL.selectAllMoneyMachine);
      return res.status(HTTPStatus.OK).json(rows);
    
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updateMoneyMachine = async function(req, res) {
  try { 
    var  price = req.params.price;
    var type = req.params.type;
    if (type === '1') {
      const { rows } = await db.query(contant.stringSQL.updateMoneyMachine,[price]);
      return res.status(HTTPStatus.OK).json(rows);
    } else if (type === '2') {
      const { rows } = await db.query(contant.stringSQL.updateMoneyMachine2VS2,[price]);
      return res.status(HTTPStatus.OK).json(rows);
    }
    
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.deleteProduct = async function(req, res) {
  try {        
    var id = req.params.id;
    const { rows } = await db.query(contant.stringSQL.deleteProduct,[id]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}











