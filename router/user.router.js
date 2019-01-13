const Router = require('express');
var userController = require('../controller/user.controller')
const passport = require('passport');
const router = new Router()

// export our router to be mounted by the parent application

router.get('/',passport.authenticate('jwt', {session: false}),userController.showListUser);
router.post('/signup',userController.signUp);
router.put('/changePass/:id/:passWord',passport.authenticate('jwt', {session: false}),userController.changePasswordById);
router.delete('/:id',passport.authenticate('jwt', {session: false}),userController.deleteUser);
module.exports = router;

