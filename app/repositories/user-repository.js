const BaseRepository = require('./base-repository')
const {User} = require('../models')
class UserRepository  extends BaseRepository{
    constructor(model){
        super(model)
    }

    async findByEmail(email){
        return this.findBy({column:'email',value:email})
    }
}

module.exports = new UserRepository(User);