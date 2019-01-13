const Router = require('express');
var db = require('../databases');
var machineJoinBillController = require('../controller/machineJoinBill.controller')
const router = new Router()

router.get('/',machineJoinBillController.getListMachineBillAndIdMachine);
router.get('/getListMachineMoneyWithMachineId',machineJoinBillController.getListMachineMoneyWithMachineId);
router.get('/getListMachineMoneyWithMachineIdLastTime/:timeEnd',machineJoinBillController.getListMachineMoneyWithMachineIdLastTime);
router.get('/getListMachineMoney/WithMachineIdDuringTime/:timeStart/:timeEnd',machineJoinBillController.getListMachineMoneyWithMachineIdDuringTime);
router.get('/getListSumMoney/And/MachineIdDuringTime/:timeStart/:timeEnd',machineJoinBillController.getListSumMoneyAndMachineIdDuringTime);
router.get('/getListSumMoneyAndMachineIdLastTime/:timeEnd',machineJoinBillController.getListSumMoneyAndMachineIdLastTime);

module.exports = router;