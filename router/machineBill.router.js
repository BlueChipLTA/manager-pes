const Router = require('express');
var db = require('../databases');
var machineBillController = require('../controller/machineBill.controller')
const router = new Router()

router.get('/',machineBillController.getAllMachineBill);

router.post('/',machineBillController.addMachineBill);
router.put('/changeMachine/:id/:machineId',machineBillController.changeMachineInBill);
router.put('/update/TimeEnd/Machine/:timeEnd/:machineMoney/:sumMoney/:id',machineBillController.updateTimeEndMachine);
router.put('/update/SumMoneyMachine/:id/:sumMoney',machineBillController.updateSumMoneyMachine);
router.get('/getListMachineBillDuringTime/:timeStart/:timeEnd',machineBillController.getListMachineBillDuringTime);
router.get('/getListBillDuringTime/Machine/:timeStart/:timeEnd/:machineId',machineBillController.getListBillDuringTimeByMachine);
router.get('/getListBill/TimeLast/Machine/:timeEnd/:machineId',machineBillController.getListBillTimeLastByMachine);
router.get('/getTimeNewStart/:machineId',machineBillController.getTimeNewStart);
router.get('/getBillNewMachine/:machineId',machineBillController.getBillNewMachine);
router.get('/getLastIDMachineBill/:machineId',machineBillController.getLastIDMachineBill);
router.get('/get/Machine/Bill/By/ID/:id',machineBillController.getMachineBillByID);
router.get('/get/All/Machine/Bill/By/time/End/:timeEnd',machineBillController.getAllMachineBillByTimeEnd);
router.get('/get/All/Machine/Bill/During/time/:timeStart/:timeEnd',machineBillController.getAllMachineBillDuringTime);
router.put('/update/Note/In/Bill/by/id/:note/:id',machineBillController.updateNoteInBill);
module.exports = router;