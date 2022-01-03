const client = require("./connection")



async function addTravel(admin_id, source, destination, cost) { //, date
    try {
        await client.query("INSERT INTO travel(admin_id, source, destination, cost) VALUES ( $1 , $2 , $3 , $4 );", [admin_id, source, destination, cost]) // , $4 , date
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}




module.exports = {
    addTravel,

}