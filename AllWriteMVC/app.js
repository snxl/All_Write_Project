import createError from 'http-errors';
import http from "http"
import https from "https"
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import session from "express-session"
import { Server } from "socket.io";
import methodOverride from "method-override";
import swaggerUi from "swagger-ui-express"
import fs from "fs"
import cors from "cors"
import dotenv from "dotenv"


dotenv.config()

//ROUTER
import indexRouter from './routes/index.js';
import dashboardRouter from "./routes/dashboard.js"
import profileRouter from './routes/profile.js';
import loginRouter from "./routes/login.js"
import resgistroRouter from "./routes/registros.js"
import contact_supportRouter from "./routes/contact_support.js"
import teste from "./routes/testesSequelize.js"
import successRouter from "./routes/success.js"
import books from "./routes/books.js"


//MIDDLEWARE
import validateRoute from './middlewares/privateRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


class App{
  constructor(){
    this.app = express();
    this.server = http.createServer(this.app);
    this.serverTLS = https.createServer({
      key: fs.readFileSync('./certificate/server.key'),
      cert: fs.readFileSync('./certificate/server.cert')
    }, this.app)
    this.checkSecure()
    this.io = new Server(this.server);
    this.config();
    this.socketIo();
    this.globalMiddlewares();
    this.routes()

  }


  config(){
    this.app.set('views', path.join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }


  routes(){
    this.app.use("/books", books)
    this.app.use('/',indexRouter);
    this.app.use("/login", loginRouter);
    this.app.use("/register", resgistroRouter);
    this.app.use("/teste", teste);
    this.app.use("/contact_support", contact_supportRouter);
    this.app.use('/success', successRouter);
    this.app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(JSON.parse(fs.readFileSync("./swaggerNew.json", "utf-8"))))

    this.validateLogin()
    this.app.use('/dashboard', dashboardRouter);
    this.app.use('/profile', profileRouter);

  }

  globalMiddlewares(){
    this.app.use(cors())
    this.app.use(logger('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser(process.env.TOKEN_SESSION, {
      httpOnly: true
    }));
    this.app.use(express.static(path.join(__dirname, 'public')));
    this.app.use(express.static(path.join(__dirname, 'web')));
    this.app.use(methodOverride("_method"))
    this.app.use(session({
      secret: "All write project",
      resave: false,
      saveUninitialized: true
    }));
  }

  validateLogin(){
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

  checkSecure(){
    this.app.use((req, res, next)=>{
      if(!req.secure){

        res.redirect(`https://localhost:${process.env.PORT_TLS || 3100}${req.url}`);

      }

      next()
    })
  }

}
export default new App()
