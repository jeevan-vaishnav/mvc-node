const logger = require('../../modules/logger')
class LogController {
    async index(req,res){
        res.send(await logger.getLogDates())
    }
    async show(req,res) {
        const {date} = req.params
        
        res.send(await logger.getLogByDate(date))
    }
}


module.exports = new LogController()