const client = require("./connection")

const {hash} = require("../utilities/hash/bcrypt")

client.connect()


async function getAllUser() {
    const res = await client.query("SELECT * FROM users")
    console.log(res.rows);
}

async function signup(username, password) {
    const result = await client.query("INSERT INTO users(username, password) VALUES($1, $2)", [username, await hash(password)])
    if(result.rowCount != 0){
        console.log("true");
    }
    else console.log("false");
}


// req.pass , username , pass 
async function login(username, password) {
    const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2 LIMIT 1", [username,await hash(password)])
     
    if(result.rows.length != 0){
        return true
    }
    else return true
}




module.exports = {
    signup,
    login,
    getAllUser
}