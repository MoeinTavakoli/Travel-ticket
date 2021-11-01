const express = require("express")
const app = express()
const bodyParser = require("body-parser")


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db/connection")

// badan pak beshe 
const {login , signup , getAllUser} = require("./db/user")


app.post('/user/signup',async (req, res) => {
    const {username  , password } = req.body
    const result =await signup(username , password)
    res.send(result)
})



app.post('/user/login',async (req, res) => {
    const {username  , password } = req.body
    const result =await login(username , password)
    res.send(result)
})


app.get('/users',async (req, res) => {
    
    res.send(await getAllUser())
})



app.listen(port = 3000, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })