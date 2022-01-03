const { signupDB, loginDB, getAllUserDB, getUser } = require("../db/user")




async function signup(req, res) {
    try {
        const { username, password, role } = req.body
        const existUser = await getUser(username, password)
        console.log(existUser.length == 0);
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
        res.send(result)
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