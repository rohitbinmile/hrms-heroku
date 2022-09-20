const { body, validationResult } = require('express-validator');

const db = require('../models');

const auth_user = db.auth_user;

const userValidatorRules = () => {
    return [
        body('email').isEmail(),
        body('phone').isMobilePhone(),
        body('email').custom(email => {
            auth_user.findOne({where:{email: email}}).then(user => {
                if (user) {
                    return Promise.reject(`User already exists with email`)
                }
            })
        }).withMessage(`User already exists with given email`),
        body('phone').custom(phone => {auth_user.findOne({where:{phone: phone}}).then(user => {
            if (user) {
                return Promise.reject(`User already exists with phone`)
            }
        })
            auth_user.findOne({where:{phone: phone}}).then(user => {
                if (user) {
                    return Promise.reject(`User already exists with phone`)
                }
            })
        }).withMessage(`User already exists with given phone`),
    ]
}

const validate = async (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
        return next();
    }

    const extracted_errors = [];
    errors.array().map(err => extracted_errors.push({ [err.param]: err.msg}))

    return res.status(422).json({
        errors: extracted_errors,
    })
}

module.exports = {
    userValidatorRules,
    validate,
}