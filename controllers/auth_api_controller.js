const bcrypt = require('bcrypt')

const db = require('../models')
const hash_pass = require('../utils/common_utils.js').hashPassword


// Create models
const auth_user = db.auth_user;  
  
const userSignup = async (req, res) => {
    let req_body = req.body;
    let pass = await hash_pass("1234");
    let req_data = {
        // id: 2,
        first_name: req_body.first_name || '',
        last_name: req_body.last_name || '',
        email: req_body.email || '',
        phone: req_body.phone || '',
        profile_pic: req_body.profile_pic || '',
        password: pass,
        is_deleted: false,
        is_active: true
    }

    const client = await auth_user.create(req_data);
    res.status(200).send(client);
}




module.exports = {
    userSignup
}