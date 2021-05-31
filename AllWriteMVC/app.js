import createError from 'http-errors';
<<<<<<< HEAD
import http from "http"
=======
>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session"
<<<<<<< HEAD
import { Server } from "socket.io";
import methodOverride from "method-override"

import connection from './config/mySQLConnection.js';
import tables from './model/tables.js';
import tables2 from "./model/livro.js"
=======

import connection from './config/mySQLConnection.js';
import tables from './model/tables.js';
>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998


import indexRouter from './routes/index.js';
import dashboardRouter from "./routes/dashboard.js"
import registerRouter from './routes/register.js';
import profileRouter from './routes/profile.js';
<<<<<<< HEAD
import loginRouter from "./routes/login.js"
import resgistroRouter from "./routes/registros.js"

//MIDDLEWARE
import validateRoute from './middlewares/privateRoutes.js';
=======
import registerPOST from './routes/register.js';

>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998

connection.connect(err => {
  if(err){
      console.log(err)
  }else{
      console.log("server connect")

<<<<<<< HEAD
      tables2.init(connection)
=======
>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998
      tables.init(connection)
  }
})


const app = express();
<<<<<<< HEAD
const server = http.createServer(app);
const io = new Server(server);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

io.on("connect", (socket)=>{
  console.log("user connect")
  socket.on("disconnect",(socket) => {
    console.log("user disconnect")
  })
})

=======
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998
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
<<<<<<< HEAD
app.use(methodOverride("_method"))

//PUBLIC MIDDLEWARES

//PUBLIC ROUTES
app.use('/',indexRouter);
app.use('/register', registerRouter);
app.use("/login", loginRouter)
app.use("/registro", resgistroRouter)

//PRIVATE MIDDLEWARES
app.use(validateRoute.login)
//PRIVATE ROUTES
app.use('/dashboard', dashboardRouter);
app.use('/profile', profileRouter);
=======

app.use('/', indexRouter);
app.use('/dashboard', dashboardRouter);
app.use('/register', registerRouter);
app.use('/profile', profileRouter);
app.use('/post', registerPOST);
>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998

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


<<<<<<< HEAD
export  {server};
=======
export default app;
>>>>>>> 4dd14287304dac070d2f1c9df8bca389e49f3998
