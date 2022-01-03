const client = require("./connection")



async function addRequest(user_id, source, destination) { //, date
    const res = await client.query("INSERT INTO request(user_id, source , destination  ) VALUES($1, $2 , $3)", [user_id, source, destination]) // , $4 , date
    return res.rows;
}





module.exports = {
    addRequest
}