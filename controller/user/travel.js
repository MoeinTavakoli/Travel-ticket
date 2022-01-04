// utlity
const isInArray = require("../../service/utils/findInArray")
const { decodeToken } = require("../../service/jwt")

// db
const { addUserToTravel, getPassngersTravel } = require("../../db/user-travel")



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











module.exports = {
    reserveTravel
}