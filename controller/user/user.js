const { addRequest, idValidation } = require("../../db/request")
const { signupDB, loginDB, getAllUserDB, getUser } = require("../../db/user")
const { generateExpirationToken } = require("../../service/jwt")

const { decodeToken } = require("../../service/jwt")

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
        const result = await loginDB(username, password, "user")
        if (result) {
            user = result[0]
            res.status(200).json({ success: true, token: generateExpirationToken(user.id) })
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




async function requestTravale(req, res) {
    // try {
    const token = req.headers.token
    const id = decodeToken(token).id
    const { source, destination } = req.body //, date

    // bere toye middleware 
    if (!id) {
        res.status(400).json({ success: false, error: " id not found !" })
    }

    if (!(await idValidation(id, "user"))) {
        res.status(400).json({ success: false, error: " user not found " })
    }
    // bere to middleware

    await addRequest(id, source, destination)
    res.status(200).json({ success: true, message: "request accepted !" })

}
// catch (error) {
//     res.json({ success: false, error })
// }
// }
// }





module.exports = {
    signup,
    login,
    getAllUser,
    requestTravale
}