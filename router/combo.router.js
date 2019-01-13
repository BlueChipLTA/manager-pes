const Router = require('express');
var comboController = require('../controller/combo.controller')
const router = new Router()

router.get('/',comboController.getAllComboService);
router.post('/',comboController.addCombo);
router.get('/getComboByID/:id',comboController.getComboById);
router.put('/editMachineMoney/:money/:id',comboController.editMachineMoney);
router.put('/editComboById/:name/:type/:money/:moneyService/:timePlay/:id',comboController.editComboById);
router.delete('/:id',comboController.deleteCombo);
module.exports = router;