
const { decodeToken } = require("../../service/jwt/jwt")
const { addTravel, removeTravel, editTravel, getTravelByID } = require("../../db/travel")
const { getPassngersTravel } = require("../../db/user-travel")


async function createTravel(req, res) { //
    try {

        const { source, destination, cost } = req.body

        const token = req.headers.token
        const admin_id = decodeToken(token).id
        if (!admin_id) {
            res.status(400).json({ success: false, error: "id is not identify" })
        }

        const result = await addTravel(admin_id, source, destination, cost)
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


async function deleteTravel(req, res) { //
    try {

        const { travel_id } = req.body

        const token = req.headers.token
        const admin_id = decodeToken(token).id
        if (!admin_id) {
            res.status(400).json({ success: false, error: "id is not identify" })
        }

        const rowCountEffected = await removeTravel(travel_id)
        if (rowCountEffected == 0) {
            res.status(400).json({ success: false, message: "travel didint delete ! " })
        }
        else {
            res.status(200).json({ success: true, message: "travel deleted !" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, error })
    }
}



async function updateTravel(req, res) {
    try {

        const { travel_id, source, destination, cost } = req.body

        const token = req.headers.token
        const admin_id = decodeToken(token).id
        if (!admin_id) {
            return res.status(400).json({ success: false, error: "id is not identify" })
        }

        const rowCountEffected = await editTravel(travel_id, source, destination, cost)
        if (rowCountEffected == 0) {
            res.status(400).json({ success: false, message: "travel didint edit ! " })
        }
        else {
            res.status(200).json({ success: true, message: "travel edited !" })
        }

    } catch (error) {
        console.log(error);
        res.json({ success: false, error })
    }
}



async function getTravel(req, res) {
    try {
        const travel_id = req.params.id

        const token = req.headers.token
        const admin_id = decodeToken(token).id
        if (!admin_id) {
            res.status(400).json({ success: false, error: "id is not identify" })
        }

        const travel = await getTravelByID(travel_id)
        if (travel.rowCount == 0) {
            res.status(400).json({ success: false, message: "travel not found !!!" })
        }
        else {
            res.status(200).json({ success: true, travel: travel.rows })
        }
    } catch (error) {
        res.status(500).json({ success: false, error })
    }
}



async function getTravelInfo(req, res) {
    const travel_id = req.params.travel_id
    
    const token = req.headers.token
    const admin_id = decodeToken(token).id
    if (!admin_id) {
        res.status(400).json({ success: false, error: "id is not identify" })
    }

    const resPassengerTravel = await getPassngersTravel(travel_id)
    if (!resPassengerTravel) {
        return res.status(400).json({ success: false, error: "travel not found" })
    }
    const arrayPassengers = resPassengerTravel.rows[0].passengers_id

    res.status(200).json({ success: false, passnegers: arrayPassengers })
}





module.exports = {
    createTravel,
    deleteTravel,
    updateTravel,
    getTravel,
    getTravelInfo
}