const { Client } = require('pg');
const dbConfig = require("../config").databse


try {
} catch (error) {

}

(function databaseConnection() {
    try {
        const client = new Client(dbConfig);
        return client
    } catch (error) {
        console.log(error);
    }
})
    ()






module.exports = client