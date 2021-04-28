import createError from 'http-errors';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session"

import connection from './config/mySQLConnection.js';
import tables from './model/tables.js';


import indexRouter from './routes/index.js';
import dashboardRouter from "./routes/dashboard.js"
import registerRouter from './routes/register.js';
import profileRouter from './routes/profile.js';
import registerPOST from './routes/register.js';


connection.connect(err => {
  if(err){
      console.log(err)
  }else{
      console.log("server connect")

      tables.init(connection)
  }
})


const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(session({
  secret: "All write project",
  resave: false,
  saveUninitialized: true
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);
app.use('/post', registerPOST);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


export default app;