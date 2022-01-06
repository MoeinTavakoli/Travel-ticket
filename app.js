const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


require("./db/connection")


app.use('/user', require("./routes/user"))
app.use('/admin', require('./routes/admin'))
app.use('/', require("./routes/main"))


app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})