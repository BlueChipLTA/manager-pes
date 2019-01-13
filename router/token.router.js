const Router = require('express');
var db = require('../databases');
var tokenController = require('../controller/token.controller')
const router = new Router()

router.get('/',tokenController.getListToken);
router.post('/',tokenController.addToken);


module.exports = router;