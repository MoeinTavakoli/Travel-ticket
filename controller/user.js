const { signupDB, loginDB, getAllUserDB } = require("../db/user")




async function signup(req, res) {
    try {
        const { username, password } = req.body
        const result = await signupDB(username, password)
        res.send(result)
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