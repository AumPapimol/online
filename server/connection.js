
const mysqsl = require('mysql2');

const db = mysqsl.createConnection({
    host:"us-east.connect.psdb.cloud",
    user:"iuvpnu3uenpm7wlznbjc",
    password:"pscale_pw_5UQGMPGNcweTeWAnF9qcpiuUbsG30ikreRNvAL8LPpg",
    port: 3306,
    database:"all_online",
    ssl:{
        rejectUnauthorized:false
    }
})

module.exports = db.promise()