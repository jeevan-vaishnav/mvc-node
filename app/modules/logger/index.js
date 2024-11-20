const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");
const { format } = winston;
const { combine, timestamp, prettyPrint, errors } = format;

const fs = require('fs')
const util = require('util')
const path = require('path')
const readdir = util.promisify(fs.readdir);
const readFile = util.promisify(fs.readFile);



const transport = new DailyRotateFile({
  datePattern: "DD-MM-YYYY",
  dirname: "logs",
});

const logger = winston.createLogger({
  format: combine(
    errors({ stack: true }),
    timestamp(),
    prettyPrint(),
    format.json()
  ),
  json: true,
  transports: [transport],
});


logger.getLogDates = async () =>{
  const dest = path.join(__dirname,"../../../logs")
  const files = await readdir(dest,{withFileTypes:true});

  return files.filter(file => !file.isDirectory() && file.name !== '.gitignore')
  .map(file => file.name.split('.')[2])
}

logger.getLogByDate = async date =>{
  return {}
}

module.exports = logger;
