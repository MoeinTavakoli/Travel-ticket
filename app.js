const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db/connection")

app.use('/user', require("./routes/user"))
app.use('/admin', require('./routes/admin'))

const { decodeToken } = require("./service/jwt")
// const { getTravel } = require("./db/travel")
const { addUserToTravel, getPassngersTravel } = require("./db/user-travel")
const isInArray = require("./service/utils/findInArray")


/*app.get("/admin/dashboard/travel/info/:travel_id", async (req, res) => {
  const travel_id = req.params.travel_id

  const token = req.headers.token
  const admin_id = decodeToken(token).id
  if (!admin_id) {
    res.status(400).json({ success: false, error: "id is not identify" })
  }

})
*/


app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})