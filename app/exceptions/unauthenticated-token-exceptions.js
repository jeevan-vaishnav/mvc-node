const BaseException = require("./base-exceptions");

class UnauthenticatedException extends BaseException {
  constructor(message = "You need to be authenticated to perform this action!", status = 403) {
    super(message, status);
  }
}

module.exports = UnauthenticatedException;
