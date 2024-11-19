
const config = require('../../../config/mail')
const Manager  = require('./manager')
class Mailer {
    constructor(config){
        this.config = config
        this.driver = _determineDriver()
    }

    async send(){

    }

    _determineDriver(){
        const connection = this.config.connection 
        return Manager.driver(connection,this.config[connection]);
    }
}

module.exports = new Mailer();