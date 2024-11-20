// npm i node-cron
const cron = require("node-cron");
class Scheduler {
  constructor(cron) {
    console.log("Constructor from Scheduler");
    this.cron = cron
    this.tasks = {
        "* * * * * *":[ require('./tasks/remove-expired-token-task') ]
    }
  }

  runTasks(){
    console.log('runTask from scheduler')
    for(const [internal,tasks] of Object.entries(this.tasks)){
        for(const task of tasks){
            try {
                this.cron.schedule(internal,async ()=>{
                    await new task().handle()
                })
            } catch (error) {
                console.log(error)    
            }
        }
        // console.log(`Internal: ${internal} , tasks: ${tasks}`)
    }    
  }
}

module.exports = new Scheduler(cron);
