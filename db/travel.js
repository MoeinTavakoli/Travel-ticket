const client = require("./connection")



async function addTravel(admin_id, source, destination, cost , type) { //, date
    try {
        await client.query("INSERT INTO travel(admin_id, source, destination, cost , type) VALUES ( $1 , $2 , $3 , $4 , $5 );", [admin_id, source, destination, cost , type]) // , $4 , date
        return true;
    } catch (error) {
        console.log(error);
        return false
    }
}


async function removeTravel(travel_id) { //, date
    try {
        const result = await client.query("DELETE FROM travel WHERE travel_id = $1", [travel_id])
        return result.rowCount
    } catch (error) {
        console.log(error);
        return false
    }
}

async function editTravel(travel_id, source, destination, cost) { //, date
    try {
        const res = await client.query("UPDATE travel SET source = $1 , destination = $2 , cost = $3  WHERE travel_id = $4;", [source, destination, cost, travel_id])
        return res.rowCount;
    } catch (error) {
        return false
    }
}

async function getTravelByID(travel_id) { //, date
    try {
        const res = await client.query("SELECT * FROM travel WHERE travel_id = $1", [travel_id])

        return res;
    } catch (error) {
        return false
    }
}



module.exports = {
    addTravel,
    removeTravel,
    editTravel,
    getTravelByID
}