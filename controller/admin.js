const { signupDB, loginDB, getAllUserDB, getAdmin } = require("../db/user")
const { generateExpirationToken } = require("../service/jwt/jwt")



async function signup(req, res) {
    try {
        const { username, password, role } = req.body
        const existUser = await getAdmin(username, password, role)
        console.log(existUser.length == 0);
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




module.exports = {
    signup,
    login,
    getAllUser
}