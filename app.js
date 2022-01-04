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

app.get("/admin/dashboard/travel/info/:travel_id/:user_id", async (req, res) => {
  const travel_id = req.params.travel_id
  const user_id = req.params.user_id

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
  const existUser = isInArray(array, user_id)
  console.log(existUser);
  if (!existUser) {
    return res.status(400).json({ success: false, error: "user is not exist in this travel " })
  }

  const information = await getUserByID(user_id)
  res.json({ information })
})


app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})