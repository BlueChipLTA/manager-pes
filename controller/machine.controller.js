var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants')


exports.getListMachine = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.selectMachine);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.addMachine = async function(req, res) {
    try {       
      var name =  req.body.name;
      var state = req.body.state;    
      await db.query(contant.stringSQL.insertMachine,[name,state]);
      const { rows} = await db.query(contant.stringSQL.getListToken,[3]);
      rows.forEach(function(row) { 
        notification.sendNotificationToClient(row.token,'AddMachine',name);
       });
      const { rows } = await db.query(contant.stringSQL.getIdNewMachine);
      
      return res.status(HTTPStatus.CREATED).json(rows[0]);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListMachineByState = async function(req, res) {
    try {       
      var state =  req.params.state;
      const { rows } = await db.query(contant.stringSQL.selectMachineState,[state]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getMachineByID = async function(req, res) {
    try {       
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.selectMachineId,[id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.updateStateById = async function(req, res) {
    try {
      var state = req.params.state;   
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.updateMachineState,[state,id]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.updateNameById = async function(req, res) {
    try {
      var name = req.body.name;   
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.updateMachineName,[name,id]);
      var message = 'Success';
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.deleteMachineById = async function(req, res) {
    try { 
      var id =  req.params.id;
      const { rows } = await db.query(contant.stringSQL.deleteMachine,[id]);
      return res.status(HTTPStatus.OK).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}









