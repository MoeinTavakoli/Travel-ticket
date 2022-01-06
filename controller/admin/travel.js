
const { decodeToken } = require("../../service/jwt/jwt")
const { addTravel, removeTravel, editTravel, getTravelByID } = require("../../db/travel")
const { getPassngersTravel } = require("../../db/user-travel")


async function createTravel(req, res) { //
    try {

        const { source, destination, cost, type } = req.body
        const admin_id = req.id

        const result = await addTravel(admin_id, source, destination, cost, type)
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
        const travel_id = req.params.travel_id

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


    const resPassengerTravel = await getPassngersTravel(travel_id)
    if (!resPassengerTravel) {
        return res.status(400).json({ success: false, error: "travel not found" })
    }
    const arrayPassengers = resPassengerTravel.rows[0].passengers_id

    res.status(200).json({ success: false, passnegers: arrayPassengers })
}



async function getSizePassengerTravel(req, res) {
    const travel_id = req.params.travel_id

    const resultArray = await getPassngersTravel(travel_id)
    if (!resultArray) {
        return res.status(400).json({ success: false, error: "travel not found " })
    }
    const array = resultArray.rows[0].passengers_id
    if (array == null) {
        return res.status(200).json({ "travel lenght reserved ": 0 })
    }
    res.status(200).json({ "travel lenght reserved ": array.length })
}





module.exports = {
    createTravel,
    deleteTravel,
    updateTravel,
    getTravel,
    getTravelInfo,
    getSizePassengerTravel
}