const users = require('./user.router')
const machines = require('./machine.router')
const product = require('./product.router')
const machineBill = require('./machineBill.router')
const machineJoinBill = require('./machineJoinBill.router')
const billService = require('./billService.router')
const combo = require('./combo.router')
const passport    = require('passport');
const token = require('./token.router')

module.exports = (app) => {
  app.use('/users', users),
  app.use('/token',passport.authenticate('jwt',{session:false}),token),
  // app.use('/token',token),
  app.use('/machine',passport.authenticate('jwt', {session: false}),machines),
  app.use('/product',passport.authenticate('jwt', {session: false}),product),
  app.use('/bill',passport.authenticate('jwt', {session: false}),machineBill),
  app.use('/machineJoinBill',passport.authenticate('jwt', {session: false}),machineJoinBill),
  app.use('/billService',passport.authenticate('jwt', {session: false}),billService),
  app.use('/combo',passport.authenticate('jwt', {session: false}),combo)
}