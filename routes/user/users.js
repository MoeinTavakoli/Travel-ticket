const express = require("express")
const app = express()

const controller = require("../../controller/user")

const travelCtl = require("../../controller/user/travel")

const validator = require("../../service/joi/schema")

// user
app.post('/signup', validator.signupSchema, controller.signup)

app.post('/login', validator.loginSchema, controller.login)

app.get('/', controller.getAllUser)


// travel 
app.post('/travel/reserve', travelCtl.reserveTravel)


module.exports = app
