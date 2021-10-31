const client = require("./connection")

client.connect()


async function getAllUser() {
    const res = await client.query("SELECT * FROM users")
    console.log(res.rows);
}

async function signup(username, password) {
    const result = await client.query("INSERT INTO users(username, password) VALUES($1, $2)", [username, password])
    if(result.rowCount != 0){
        console.log("true");
    }
    else console.log("false");
}

async function login(username, password) {
    const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password])
    if(result.rows.length != 0){
        console.log("true");
    }
    else console.log("false");
}



// login('moein2','test')
// getAllUser()
// signup("moein2" , "test")

