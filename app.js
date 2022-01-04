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
const { getUserByID } = require("./db/user")

/* app.get("/admin/dashboard/travel/size/:travel_id", async (req, res) => {
  const travel_id = req.params.travel_id

  const token = req.headers.token
  const admin_id = decodeToken(token).id
  if (!admin_id) {
    res.status(400).json({ success: false, error: "id is not identify" })
  }

  const resultArray = await getPassngersTravel(travel_id)
  if (!resultArray) {
    return res.status(400).json({ success: false, error: "travel not found " })
  }
  const array = resultArray.rows[0].passengers_id
  console.log(array);
  res.status(200).json({ "travel lenght reserved ": array.length })
})
*/

app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})