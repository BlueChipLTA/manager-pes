const Router = require('express');
var productController = require('../controller/product.controller')
const router = new Router()

router.get('/', productController.getListProduct);
router.post('/', productController.insertProduct);
router.get('/:id', productController.selectProductById);
router.put('/:id', productController.updateProduct);
router.put('/:amount/:id', productController.updateAmountByID);
router.put('/update/price/:id', productController.updatePriceByID);
router.put('/update/active/:active/:id', productController.updateProductisAcivte);
router.get('/getPrice/:id', productController.getPriceById);
router.get('/getProduct/Active', productController.selectProductISActive);
router.get('/getProduct/name', productController.selectNameProductAmount);
router.get('/getProduct/type/:type', productController.selectProductByType);
router.get('/get/Money/Machine/:type', productController.selectMoneyMachine);
router.put('/update/Money/Machine/update/price/:price/:type',productController.updateMoneyMachine);
router.get('/get/All/MoneyMachine',productController.selectALLMoneyMachine);
router.delete('/:id', productController.deleteProduct);

module.exports = router;