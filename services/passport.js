const passport    = require('passport');
const passportJWT = require("passport-jwt");

const ExtractJWT = passportJWT.ExtractJwt;

const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy   = passportJWT.Strategy;
var db = require('../databases');
var constants =require ('../config/contants');
var utils =require ('../config/utils');
// Local strategy
passport.use(new LocalStrategy({
  usernameField: 'userName',
  passwordField: 'passWord'
},
function (userName, passWord, cb) {

  //Assume there is a DB module pproviding a global UserModel
  return db.query(constants.stringSQL.selectUserByUser,[userName])
    .then(res => {
        var n = passWord.localeCompare(utils.DencodePassword(res.rows[0].passWord))
          if (!res.rows[0]) {
              return cb(null, false, {message: 'Incorrect Username'});
          } else if (n != 0) {
            return cb(null, false, {message: 'Incorrect password.'});
          }

          return cb(null, res.rows[0], {
              message: 'Logged In Successfully'
          });
      })
      .catch(err => {
          return cb(err);
      });
}
));

// Jwt strategy

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey   : constants.JWT_SECRET
},
function (jwtPayload, cb) {
  //find the user in db if needed
  return db.query(constants.stringSQL.selectUserByUser,[jwtPayload])
      .then(res => {
        
          return cb(null, res.rows[0]);
      })
      .catch(err => {
        
          return cb(err);
      });
}
));
