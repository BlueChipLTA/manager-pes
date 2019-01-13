const Router = require('express');
var db = require('../databases');
var billServiceController = require('../controller/billService.controller')
const router = new Router()

router.get('/',billServiceController.getAllBillService);
router.post('/',billServiceController.addBillService);
router.get('/getMoneyByIDMachineBill/:idBill',billServiceController.getMoneyByIDMachineBill);
router.put('/updateAmountProduct/:amount/:money/:id',billServiceController.updateAmountProduct);
router.get('/getBillService/Product/:idBill/:idProduct',billServiceController.getBillServiceWithProduct);
router.delete('/:id',billServiceController.deleteBillSericeById);
router.get('/getProductService/Join/BillServices/:idBill',billServiceController.getProductServiceJoinBillServices);

module.exports = router;