const express = require("express")
const app = express()

const controller = require("../../controller/admin")
const validator = require("../../service/joi/schema")

app.post('/signup', validator.signupSchema, controller.signup)

app.post('/login', validator.loginSchema, controller.login)

app.get('/', controller.getAllUser)



module.exports = app
