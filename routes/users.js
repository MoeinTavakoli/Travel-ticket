const express = require("express")
const app = express()

const controller = require("../controller/user")


app.post('/signup' , controller.signup)

app.post('/login' , controller.login)

app.get('/', controller.getAllUser)



module.exports = app
