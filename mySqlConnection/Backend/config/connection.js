const mysql = require("mysql");
const config  = require("./config");

try {

    var connection = mysql.createConnection({
        host: config.host,
        user: config.user,
        password: config.password,
        database: config.database,
        port: config.port
    });

    connection.connect(function (err) {
        if (!err) {
            console.log("Database is connected ... nn");
        } else {
            // console.log(error.message)
            console.log("Error connecting database ... nn");
            throw err;
        }
    });

} catch (e) {
    console.log("Error connecting database ... nn", e);
}

module.exports = connection;
