const { getAllUserDB } = require("../../db/user")
const { decodeToken } = require("../../service/jwt/jwt")


async function getAllUser(req, res) {
    try {
        res.send(await getAllUserDB())
    }
    catch (err) {
        throw err
    }
}




async function getAllRequest(req, res) {
    try {
        // in bere to middleware
        const token = req.headers.token
        const id = decodeToken(token).id
        if (!id) {
            res.status(400).json({ success: false, error: "id is not define ! maybe your token was expire ! " })
        }
        const allRequest = await getAllrequest()
        res.status(200).json({ success: true, requests: allRequest })
    } catch (error) {
        console.log(error);
        res.json(400).json({ success: false, error })
    }
}


module.exports = {
    getAllUser,
    getAllRequest
}