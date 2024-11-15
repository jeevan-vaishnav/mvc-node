const BaseException = require("./base-exceptions");

class ModelNotFound extends BaseException {
  constructor(model) {
    super(`Requested ${model} was not found`,404);
  }
}

module.exports = ModelNotFound;
