const config = require("../../../config/mail");
const Manager = require("./manager");
class Mailer {
  constructor(config) {
    this.config = config;
    this.driver = this._determineDriver();
  }


  _determineDriver() {
    const connection = this.config.connection;
    return Manager.driver(connection, this.config[connection]);
  }

  async send(view, cb) {
    return await this.driver
      .send(view, cb)
      .then((res) => {})
      .catch((err) => {
        throw new Error(err.message);
      });
  }
}

module.exports = new Mailer(config);
