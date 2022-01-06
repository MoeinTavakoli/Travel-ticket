const express = require("express")
const app = express()

const controller = require("../../controller/home")

// home 
app.get('/', controller.home)


// search
app.post('/search',controller.searchCtl)


module.exports = app
