const express = require('express');

const { userValidatorRules, validate } = require('../utils/validator.js')
const auth_api_controller = require('../controllers/auth_api_controller.js');


router = express.Router();
// Client master apis
// Client master apis 
router.post('/signup', userValidatorRules(), validate, auth_api_controller.userSignup);

module.exports = router;