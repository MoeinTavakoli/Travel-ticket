
const client = require("./connection")




async function addUserToTravel(user_id, travel_id) { //, date
    try {
        const res = await client.query(`UPDATE travel SET passengers_id = passengers_id || '{${user_id}}' WHERE travel_id = $1`, [travel_id])
        return res.rowCount;
    } catch (error) {
        console.log(error);
        return false
    }
}

async function getPassngersTravel(travel_id) { //, date
    try {
        const res = await client.query(`SELECT passengers_id FROM travel WHERE travel_id = $1`, [travel_id])
        if (res.rowCount == 0) {
            return false
        } else {
            res.rows.passengers_id
        }


        return res;
    } catch (error) {
        console.log(error);
        return false
    }
}


module.exports = {
    addUserToTravel,
    getPassngersTravel

}