
const drivers = require('./drivers')
const Sender = require('./sender')
class Manager {
    driver(name,config){
        const driver  = drivers[name]
        return new Sender(new driver(config))

    }
}

module.exports  = new Manager()
