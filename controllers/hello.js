const { resourceLimits } = require('worker_threads');
const config_details = require('../config');
const Pool = require('pg').Pool;

let db_creds = config_details['db']
const pool = new Pool({
    user: db_creds['DB_USER'],
    host: db_creds['DB_HOST'],
    database: db_creds['DB_NAME'],
    password: db_creds['DB_PASS'],
    port: db_creds['DB_PORT'],
})

exports.hello = (req, res) => {
    pool.query("select 1+1 AS solution", (err, result) => {
        if (err) throw err;
        console.log("=======: ", result)
    })
    res.send("Hello");
}
