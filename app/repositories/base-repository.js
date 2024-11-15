const ModelNotFound = require('../exceptions/model-not-found')
class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async findById(id){
    return await this.model.findOne({where:{id}})
  }


  async findBy({ column, value }) {
    const where = {};
    where[column] = value;
    const record = await this.model.findOne({where:where});
    if(!record){
      throw new ModelNotFound(this.model.name.toLowerCase())
    }
    return record;
  }

  async getAll() {}

  async create() {}
  async update() {}
  async destroy() {}
}

module.exports = BaseRepository;
