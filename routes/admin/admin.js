const express = require("express")
const app = express()

const controller = require("../../controller/admin")
const travelCtl = require("../../controller/admin/travel")
const passengerCtl = require("../../controller/user/travel")

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
app.get("/dashboard/travel/:travel_id", validator.tokenSchema, validator.travelIdSchema, travelCtl.getTravel)
app.get("/dashboard/travel/info/:travel_id", validator.tokenSchema, validator.travelIdSchema, travelCtl.getTravelInfo)

app.get("/dashboard/travel/info/:travel_id/:user_id", validator.tokenSchema, validator.travelIdSchema, validator.userIdSchema, passengerCtl.searchUserInTravel)
app.get("/dashboard/travel/size/:travel_id", validator.tokenSchema, validator.travelIdSchema, travelCtl.getSizePassengerTravel)




module.exports = app
