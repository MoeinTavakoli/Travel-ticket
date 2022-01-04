const express = require("express")
const app = express()

const controller = require("../../controller/admin")
const travelCtl = require("../../controller/admin/travel")

const validator = require("../../service/joi/schema")

app.post('/signup', validator.signupSchema, controller.signup)

app.post('/login', validator.loginSchema, controller.login)

app.get('/', controller.getAllUser)

// request
app.post("/dashboard/request", controller.getAllRequest)

// Travel
app.post("/dashboard/travel", travelCtl.createTravel)
app.delete("/dashboard/travel", travelCtl.deleteTravel)
app.put("/dashboard/travel", travelCtl.updateTravel)
app.get("/dashboard/travel/:id", travelCtl.getTravel)


module.exports = app
