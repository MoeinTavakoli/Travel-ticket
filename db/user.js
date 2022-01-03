const client = require("./connection")

const { hash } = require("../service/hash/bcrypt")

client.connect()


async function getAllUserDB() {
    const res = await client.query("SELECT * FROM users WHERE role = 'admin' ") //ORDER BY id DESC
    return res.rows;
}

async function getAdmin(username, password, role = 'user') {
    const res = await client.query("SELECT id FROM users WHERE username = $1 AND password = $2 AND role = $3 LIMIT 1", [username, await hash(password), role])
    return res.rows;
}


async function signupDB(username, password, role) {
    try {
        const result = await client.query("INSERT INTO users(username, password , role) VALUES($1, $2 , $3)", [username, await hash(password), role])
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
async function loginDB(username, password, role) {
    try {
        const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2 AND role = $3 LIMIT 1", [username, await hash(password), role])
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
    getAllUserDB,
    getAdmin
}