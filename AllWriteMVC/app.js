import createError from 'http-errors';
import http from "http"
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session"
import { Server } from "socket.io";
import methodOverride from "method-override"


import indexRouter from './routes/index.js';
import dashboardRouter from "./routes/dashboard.js"
import profileRouter from './routes/profile.js';
import loginRouter from "./routes/login.js"
import resgistroRouter from "./routes/registros.js"
import teste from "./routes/testesSequelize.js"

//MIDDLEWARE
import validateRoute from './middlewares/privateRoutes.js';



const app = express();
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
app.use(express.static(path.join(__dirname, 'web')));
app.use(methodOverride("_method"))

//PUBLIC MIDDLEWARES

//PUBLIC ROUTES
app.use('/',indexRouter);
app.use("/login", loginRouter)
app.use("/register", resgistroRouter)
app.use("/teste", teste)


//PRIVATE MIDDLEWARES
app.use(validateRoute.login)
//PRIVATE ROUTES
app.use('/dashboard', dashboardRouter);
app.use('/profile', profileRouter);

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


export  {server};
