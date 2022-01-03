const { signupDB, loginDB, getAllUserDB, getUser } = require("../db/user")
const { generateExpirationToken } = require("../service/jwt")



async function signup(req, res) {
    try {
        const { username, password } = req.body
        const existUser = await getUser(username, password)
        if (existUser.length != 0) {
            return res.status(400).json({ error: "user is exist" })
        }
        const result = await signupDB(username, password, "user")
        return res.send(result)
    }
    catch (err) {
        throw err
    }
}




async function login(req, res) {
    try {
        const { username, password } = req.body
        const result = await loginDB(username, password)
        if (result) {
            res.status(200).json({ success: true, token: generateExpirationToken(username, password) })
        }
        else {
            res.status(400).json({ success: false, error: "username or password is not exist" })
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




module.exports = {
    signup,
    login,
    getAllUser
}