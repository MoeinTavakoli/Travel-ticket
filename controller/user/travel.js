// utlity
const isInArray = require("../../service/utils/findInArray")
const { decodeToken } = require("../../service/jwt")

// db
const { addUserToTravel, getPassngersTravel } = require("../../db/user-travel")
const { getUserByID } = require("../../db/user")


async function reserveTravel(req, res) {
    try {
        const token = req.headers.token
        const user_id = decodeToken(token).id
        const { travel_id } = req.body

        const resultArray = await getPassngersTravel(travel_id)
        if (!resultArray) {
            return res.status(400).json({ success: false, error: "travel not found " })
        }
        const array = resultArray.rows[0].passengers_id

        const existItem = isInArray(array, user_id)

        if (existItem) {
            return res.status(400).json({ success: false, error: " you reserved this travel and cant reserved again !" })
        }

        const resultReserve = await addUserToTravel(user_id, travel_id)

        if (resultReserve == 0 || resultReserve == false) {
            return res.status(400).json({ success: false, error: "update is not succesfuly !!!" })
        }
        else { res.json({ success: true, message: "reserve succesfuly ... " }) }
    } catch (error) {
        res.status(500).json({ success: false, error })
    }
}



async function searchUserInTravel(req, res) {
    const travel_id = req.params.travel_id
    const user_id = req.params.user_id

    const token = req.headers.token
    const admin_id = decodeToken(token).id
    if (!admin_id) {
        res.status(400).json({ success: false, error: "id is not identify" })
    }

    const resultArray = await getPassngersTravel(travel_id)
    if (!resultArray) {
        return res.status(400).json({ success: false, error: "travel not found " })
    }
    const array = resultArray.rows[0].passengers_id
    const existUser = isInArray(array, user_id)
    if (!existUser) {
        return res.status(400).json({ success: false, error: "user is not exist in this travel " })
    }

    const information = await getUserByID(user_id)
    res.status(200).json({ information })
}







module.exports = {
    reserveTravel,
    searchUserInTravel
}