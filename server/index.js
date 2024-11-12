const express = require("express");

class Server {
  constructor(port) {
    this.port = port;
    this.app = express();
  }

  start() {
    this._listen();
    this._setupRoutes();
  }

  _setupRoutes() {
    this.app.get("/home", (req, res) => {
      res.send("Home Page");
    });

    this.app.get("/product", (req, res) => {
      res.send("Product page");
    });
  }

  _listen() {
    //_listen this mean the function only for this server class not outside class (_) its indicate inside class
    this.app.listen(this.port, () => {
      console.log(`App is running on port http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
