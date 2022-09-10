const passport = require('passport');
const bcrypt = require("bcrypt");
const express = require('express');
const router = express.Router();
const {PostUser} = require('../controllers/users');

router.post('/registration', async function(req, res, next) {
  await PostUser(req,res);
});
router.post('/login',function (req, res, next) {
  passport.authenticate('local', function (err, user, info) {
    if (err) { return next(err); }
    if (!user) { res.status(401); return res.send({message:'noAutorized'}) }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      if (bcrypt.compareSync('1234', user.password)) {
        res.send({user,message:'updatePassword'})
      } else {
        return  res.send(user);
      }

    });
  })(req, res, next);});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
