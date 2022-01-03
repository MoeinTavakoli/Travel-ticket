
const { decodeToken } = require("../../service/jwt/jwt")
const { addTravel: addTravelDB } = require("../../db/travel")


async function addTravel(req, res) { //
    try {

        const { source, destination, cost } = req.body

        const token = req.headers.token
        const admin_id = decodeToken(token).id
        if (!admin_id) {
            res.status(400).json({ success: false, error: "id is not identify" })
        }

        const result = await addTravelDB(admin_id, source, destination, cost)
        if (result) {
            res.status(200).json({ success: true, message: "travel added ..." })
        }
        else {
            res.status(400).json({ success: false, message: "travel didnt add !", error: "result nadashti ", result })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, error })
    }
}





module.exports = {
    addTravel
}