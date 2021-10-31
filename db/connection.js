const { Client } = require('pg');
const dbConfig = require("../config").databse


const client = new Client(dbConfig);
client.connect()



// .then(()=> console.log("connected"))
// .then(()=>client.query("SELECT * FROM users"))
// .then(reslut=> console.log(reslut))
// .catch((err)=>console.log(err))
// .finally(()=>client.end())


async function getAllUser() {
    const res = await client.query("SELECT * FROM users")
    console.log(res.rows);
}

async function signup(username, password) {
    const res = await client.query("INSERT INTO users(username, password) VALUES($1, $2)", [username, password])
    console.log(res);
}

async function login(username, password) {
    const result = await client.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password])
    if(result.rows.length != 0){
        console.log("true");
    }
    else console.log("false");
}



// getAllUser()
login("mmd" , "123")