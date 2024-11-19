const Message = require('./message')

class Sender {
    constructor(driver){
        this.driver = driver
    }

    async send(view,cb){
        const message = new Message()
        cb(message)

        message.data['template'] = view
        return await this.driver.send(message.parse())
    }
}

module.exports = Sender