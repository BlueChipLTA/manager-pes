var db = require('../databases');
var HTTPStatus = require('http-status');
var utils = require ('../config/utils');
var contant = require ('../config/contants');
var notification = require ('../config/Notification');

exports.getAllMachineBill = async function(req, res) {
    try {              
      const { rows } = await db.query(contant.stringSQL.getAllMachineBill);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.addMachineBill = async function(req, res) {
    try {       
      var timeStart =  req.body.timeStart;
      var timeEnd = req.body.timeEnd;    
      var sumMoney = req.body.sumMoney;   
      var machineMoney = req.body.machineMoney;   
      var machineId = req.body.machineId;
      var type = req.body.type;
      var note = req.body.note;
      await db.query(contant.stringSQL.insertMachineBill,[timeStart,timeEnd,sumMoney,machineMoney,machineId,type,note]);
      const { rows} = await db.query(contant.stringSQL.getListToken,[2]);
      rows.forEach(function(row) { 
        notification.sendNotificationToClient(row.token,'AddMachineBill',timeStart+"-"+machineId);
       });
      return res.status(HTTPStatus.CREATED).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.changeMachineInBill = async function(req, res) {
    try {
      var id = req.params.id;   
      var machineId =  req.params.machineId;
      await db.query(contant.stringSQL.changeMachineInBill,[machineId,id]);
      const { rows} = await db.query(contant.stringSQL.getListToken,[2]);
      rows.forEach(function(row) { 
        notification.sendNotificationToClient(row.token,'ChangeMachineBill',machineId+"-"+id);
       });
      return res.status(HTTPStatus.OK).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.updateTimeEndMachine = async function(req, res) {
    try {
      var id = req.params.id;   
      var timeEnd =  req.params.timeEnd;
      var machineMoney = req.params.machineMoney;
      var sumMoney = req.params.sumMoney;
      const { rows } = await db.query(contant.stringSQL.updateTimeEndMachine,[timeEnd,machineMoney,sumMoney,id]);
      rows.forEach(function(row) { 
        notification.sendNotificationToClient(row.token,'EndMachineBill',timeEnd+"-"+id+'-'+sumMoney);
       });
      return res.status(HTTPStatus.OK).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.updateSumMoneyMachine = async function(req, res) {
    try {
      var id = req.params.id;   
      var sumMoney =  req.params.sumMoney;
      const { rows } = await db.query(contant.stringSQL.updateSumMoneyMachine,[sumMoney,id]);
      return res.status(HTTPStatus.OK).json(contant.message);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListMachineBillDuringTime = async function(req, res) {
    try {       
      var timeStart =  req.params.timeStart;
      var timeEnd =  req.params.timeEnd;
      const { rows } = await db.query(contant.stringSQL.getListMachineBillDuringTime,[timeStart,timeEnd]);
      return res.status(HTTPStatus.OK).json(rows);
    } catch (e) {
    console.log(e);
      return res.status(HTTPStatus.BAD_REQUEST).json(e);
    }
}

exports.getListBillDuringTimeByMachine = async function(req, res) {
  try {
    var machineId = req.params.machineId;       
    var timeStart =  req.params.timeStart;
    var timeEnd =  req.params.timeEnd;
    const { rows } = await db.query(contant.stringSQL.getListBillDuringTimeByMachine,[timeStart,timeEnd,machineId]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}


exports.getListBillTimeLastByMachine = async function(req, res) {
  try {
    var machineId = req.params.machineId;       
    var timeEnd =  req.params.timeEnd;
    const { rows } = await db.query(contant.stringSQL.getListBillTimeLastByMachine,[timeEnd,machineId]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}


exports.getTimeNewStart = async function(req, res) {
  try {         
    var machineId =  req.params.machineId;
    const { rows } = await db.query(contant.stringSQL.getTimeNewStart,[machineId]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getBillNewMachine = async function(req, res) {
  try {         
    var machineId =  req.params.machineId;
    const { rows } = await db.query(contant.stringSQL.getBillNewMachine,[machineId]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getLastIDMachineBill = async function(req, res) {
  try {         
    var machineId =  req.params.machineId;
    const { rows } = await db.query(contant.stringSQL.getLastIDMachineBill,[machineId]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.gettimeStartLastMachineBill = async function(req, res) {
  try {         
    var id =  req.params.id;
    const { rows } = await db.query(contant.stringSQL.gettimeStartLastMachineBill,[id]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getMachineBillByID = async function(req, res) {
  try {
    var id =  req.params.id;              
    const { rows } = await db.query(contant.stringSQL.getMachineBillByID,[id]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getAllMachineBillByTimeEnd = async function(req, res) {
  try {
    var timeEnd =  req.params.timeEnd;              
    const { rows } = await db.query(contant.stringSQL.getAllMachineBillByTimeEnd,[timeEnd]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.getAllMachineBillDuringTime = async function(req, res) {
  try {
    var timeStart =  req.params.timeStart;
    var timeEnd = req.params.timeEnd;
    const { rows } = await db.query(contant.stringSQL.getAllMachineBillDuringTime,[timeStart,timeEnd]);
    return res.status(HTTPStatus.OK).json(rows);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

exports.updateNoteInBill = async function(req, res) {
  try {
    var note =  req.params.note;
    var id = req.params.id;
    const { rows } = await db.query(contant.stringSQL.updateNoteInBill,[note,id]);
    return res.status(HTTPStatus.OK).json(contant.message);
  } catch (e) {
  console.log(e);
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}






