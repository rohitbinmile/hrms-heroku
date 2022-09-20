const express = require('express'),

hello = require('../controllers/hello')

router = express.Router()

router.get('/', hello.hello);


module.exports = router