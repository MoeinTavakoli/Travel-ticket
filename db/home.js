const client = require("./connection")



async function getAll() {
    try {
        const result = await client.query("SELECT * from travel")
        if (result.rowCount != 0) {
            return result.rows
        }
        else return false
    }
    catch (err) {
        return false
    }
}

async function search(source, destination) {
    try {
        const result = await client.query("SELECT * from travel WHERE source =$1 AND destination = $2 ", [source, destination])
        if (result.rowCount != 0) {
            return result.rows
        }
        else return false
    }
    catch (err) {
        return false
    }
}




module.exports = {
    getAll,
    search
}