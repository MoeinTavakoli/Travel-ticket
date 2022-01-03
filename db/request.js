const client = require("./connection")



async function addRequest(user_id, source, destination) { //, date
    const res = await client.query("INSERT INTO request(user_id, source , destination  ) VALUES($1, $2 , $3)", [user_id, source, destination]) // , $4 , date
    return res.rows;
}


async function idValidation(id, role) {
    try {
        const result = await client.query("SELECT * FROM users WHERE id = $1 AND role like $2 LIMIT 1", [id, role])
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
    addRequest,
    idValidation
}