const { signupDB, loginDB, getAllUserDB, getUser } = require("../../db/user")
const { generateExpirationToken, decodeToken } = require("../../service/jwt/jwt")

const { getAllrequest } = require("../../db/request")


async function signup(req, res) {
    try {
        const { username, password, role } = req.body
        const existUser = await getUser(username, password, role)
        if (existUser.length != 0) {
            return res.status(400).json({ error: "user is exist" })
        }
        const result = await signupDB(username, password, "admin")
        return res.send(result)
    }
    catch (err) {
        throw err
    }
}




async function login(req, res) {
    try {
        const { username, password } = req.body
        const result = await loginDB(username, password, "admin")
        if (result) {
            user = result[0]
            res.status(200).json({ success: true, token: generateExpirationToken(user.id) })
        }
        else {
            res.status(400).json({ success: false, error: "username OR password is not exist" })
        }
    }
    catch (err) {
        throw err
    }
}


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
    signup,
    login,
    getAllUser,
    getAllRequest
}