const express = require("express");
const webRoutes = require("./web");

class Router {
  constructor() {
    this.router = express.Router();
    this.webRoutes = webRoutes;
  }

  create(app) {
    //TODO attach middleware
    //TODO attach routes
    this._attachWebRoutes();
    //TODO handle 404 pages
    //TODO handle exceptions
    //TODO register router

    app.use(this.router);
  }

  _attachWebRoutes() {
    this._attachRoutes(this.webRoutes);
  }

  _attachApiRoutes() {
    // this._attachRoutes(this.apiRoutes,'/api')
  }

  _attachRoutes(routeGroups, prefix = "") {
    routeGroups.forEach(({ group, routes }) => {
      routes.forEach(({ method, path, handler }) => {
        console.log(prefix + group.prefix + path, handler);
        this.router[method](prefix + group.prefix + path, handler);
      });
    });
  }
}

module.exports = new Router();
