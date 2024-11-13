/**Server */
const express = require("express");
const Router = require('../router')

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.router = Router;
  }

  start() {
    this._listen();
    this._setupRoutes();
  }

  _setupRoutes() {
    this.router.create(this.app)    
  }

  _listen() {
    //_listen this mean the function only for this server class not outside class (_) its indicate inside class
    this.app.listen(this.port, () => {
      console.log(`App is running on port http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
