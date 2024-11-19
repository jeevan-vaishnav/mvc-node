
const drivers = require('./drivers')

class Manager {
    driver(name,config){
        const driver  = drivers[name]
    }
}

module.exports  = new Manager()
