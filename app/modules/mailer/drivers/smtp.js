// npm i nodemailer-express-handlebars
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

class Smtp{
    constructor(config){
        this.transporter = nodemailer.createTransport(config);
        this._setCompiler()

    }


    _setCompiler(){
        this.transporter.use('compile',hbs({
            viewEngine:{defaultLayout:false},
            viewPath:'views/emails/',
            extName:'.hbs'
        }))
    }

    send(message){
        return new Promise((resolve,reject)=>{
            this.transporter.sendMail(message,(err,res)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(res)
                }
            })
        })
    }
}

module.exports = Smtp