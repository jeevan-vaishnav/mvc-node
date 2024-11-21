/**Router Index*/
const express = require("express");
const webRoutes = require("./web");
const apiRoutes = require('./api');
const logger = require('../app/modules/logger')
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

      const expectJSON = /application\/json/.test(req.get('accept'))
      console.log(expectJSON)

      if(expectJSON){
        return res.status(err.statusCode).send({
          message:err.message,
          statusCode:err.statusCode
        });
      }

      logger.error(err.message) // implemented logger
      return expectJSON
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
      routes.forEach(({ method, path,middleware = [] , handler }) => {
        this.router[method](prefix + group.prefix + path, [...group.middleware || [], ...middleware], this._catchError(handler));
      });
    });
  }
}

module.exports = new Router();
