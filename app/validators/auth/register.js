const {body} = require('express-validator')

module.exports = (()=>{
        return [
            body('firstName')
            .notEmpty()
            .withMessage('First Name cannot be empty!'),

            body('lastName')
            .notEmpty()
            .withMessage('last Name cannot be empty!'),

            body('email')
            .isEmail()
            .withMessage('Email needs to be valid address!'),

            body('password')
            .notEmpty()
            .withMessage('Password cannot be empty!')
        ]
})()