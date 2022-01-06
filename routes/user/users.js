const express = require("express")
const app = express()

const controller = require("../../controller/user")

const travelCtl = require("../../controller/user/travel")

const validator = require("../../service/joi/schema")
const verifyToken = require("../../service/jwt/middleware")
// user
app.post('/signup', validator.signupSchema, controller.signup)

app.post('/login', validator.loginSchema, controller.login)

// request
app.post('/request', validator.tokenSchema, verifyToken, controller.requestTravale)

// travel 
app.post('/travel/reserve', validator.tokenSchema, verifyToken, travelCtl.reserveTravel)


module.exports = app
