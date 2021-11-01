const client = require("./connection")

const { hash } = require("../service/hash/bcrypt")

client.connect()


async function getAllUserDB() {
    const res = await client.query("SELECT * FROM users ORDER BY id DESC")
    return res.rows;
}

async function signupDB(username, password) {
    try {
        const result = await client.query("INSERT INTO users(username, password) VALUES($1, $2)", [username, await hash(password)])
        if (result.rowCount != 0) {
            return true
        }
        else return false
    }
    catch (err) {
        return false
    }
}


// req.pass , username , pass 
async function loginDB(username, password) {
    try {
        const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2 LIMIT 1", [username, await hash(password)])
        if (result.rows.length != 0) {
            return true
        }
        else return false
    }
    catch (err) {
        console.log(err);
        return false
    }
}




module.exports = {
    signupDB,
    loginDB,
    getAllUserDB
}