const Router = require('express');
var db = require('../databases');
var machineController = require('../controller/machine.controller')
const router = new Router()

router.get('/',machineController.getListMachine);
router.post('/',machineController.addMachine);
router.get('/listMachineState/:state',machineController.getListMachineByState);
router.put('/:state/:id',machineController.updateStateById)
router.put('/:id',machineController.updateNameById)
router.delete('/:id',machineController.deleteMachineById)

module.exports = router;