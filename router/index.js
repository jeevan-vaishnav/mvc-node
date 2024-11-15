/**Router Index*/
const express = require("express");
const webRoutes = require("./web");
const apiRoutes = require('./api');

class Router {
  constructor() {
    this.router = express.Router();
    this.webRoutes = webRoutes;
    this.apiRoutes = apiRoutes;
  }

  create(app) {
    //TODO attach middleware
    this._attachMiddleware();
    //TODO attach routes
    this._attachWebRoutes();
    this._attachApiRoutes();
    //TODO handle 404 pages
    this._handlePageNotFound();
    //TODO handle exceptions
    this._handleExceptions();
    //TODO register router

    app.use(this.router);
  }


  _handleExceptions(){
    this.router.use((err,req,res,next)=>{
      err.statusCode = err.status || err.statusCode || 500
      return res.status(err.statusCode).send(err.message);
    })
  }

  _catchError(route){
    return (req,res,next) => {
      route(req,res,next).catch(next)
    }
  }
  _attachMiddleware(){
    this.router.use(express.json())
  }

  _handlePageNotFound(){
    this.router.all("*",(req,res)=>{
      res.sendStatus(404).send('Page not found!')
      console.log("Page not found!")
    })    
  }

  _attachWebRoutes() {
    this._attachRoutes(this.webRoutes);
  }

  _attachApiRoutes() {
    this._attachRoutes(this.apiRoutes,'/api')
  }

  _attachRoutes(routeGroups, prefix = "") {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, handler }) => {
        console.log(prefix + group.prefix + path, handler);
        this.router[method](prefix + group.prefix + path, this._catchError(handler));
      });
    });
  }
}

module.exports = new Router();
