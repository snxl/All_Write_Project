import createError from 'http-errors';
import http from "http"
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session"
import { Server } from "socket.io";
import methodOverride from "method-override";

//ROUTER
import indexRouter from './routes/index.js';
import dashboardRouter from "./routes/dashboard.js"
import profileRouter from './routes/profile.js';
import loginRouter from "./routes/login.js"
import resgistroRouter from "./routes/registros.js"
import teste from "./routes/testesSequelize.js"

//MIDDLEWARE
import validateRoute from './middlewares/privateRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class App{
  constructor(){
    this.app = express()
    this.server = http.createServer(this.app);
    this.io = new Server(this.server);
    this.config()
    this.socketIo()
    this.globalMiddlewares()
    this.publicRoutes()
    this.privateMiddlewares()
    this.privateRoutes()
    this.handleError()
  }

  config(){
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }

  publicRoutes(){
    this.app.use('/',indexRouter);
    this.app.use("/login", loginRouter)
    this.app.use("/register", resgistroRouter)
    this.app.use("/teste", teste)
    this.error404()
  }

  privateRoutes(){
    this.app.use('/dashboard', dashboardRouter);
    this.app.use('/profile', profileRouter);
    this.error404()
  }

  globalMiddlewares(){
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.static(path.join(__dirname, 'web')));
    this.app.use(methodOverride("_method"))
    this.app.use(session({
      secret: "All write project",
      resave: false,
      saveUninitialized: true
    }))
  }

  privateMiddlewares(){
    this.app.use(validateRoute.login)
  }

  error404(){
    this.app.use(function (req, res, next) {
      next(createError(404));
    });
  }

  handleError(){
    this.app.use(function (err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });
  }

  socketIo(){
    this.io.on("connect", (socket)=>{
      console.log("user connect")
      socket.on("disconnect",(socket) => {
        console.log("user disconnect")
      })
    })
  }
}

export default new App().server
