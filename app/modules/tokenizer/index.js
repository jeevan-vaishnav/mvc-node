const jwt = require("jsonwebtoken");
const appConfig = require("../../../config/app");
const crypto = require('crypto')
class Tokenizer {
  constructor(appConfig) {
    this.config = appConfig;
  }

  generateAccessToken(user) {
    return jwt.sign(user, this.config.appKey, {
      expiresIn: this.config.tokenExpiresIN,
    });
  }

  generateRefreshToken(length = 40) {
    return crypto.randomBytes(length).toString('hex')
  }
}

module.exports = new Tokenizer(appConfig);
