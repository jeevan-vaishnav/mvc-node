class BaseTask {
    async handle(){
        this.info('Empty task!')
    }

    info(message){
        console.log(message)
    }
    saveLog(message){

    }
}

module.exports = BaseTask