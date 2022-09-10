const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const initializePassport = require('./passport/passport');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'SECRET' })); // session secret
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
initializePassport(passport);

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const categoryRouter = require('./routes/category');

app.use('/api/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products',productsRouter);
app.use('/api/categories',categoryRouter);

module.exports = app;
