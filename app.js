const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db/connection")

app.use('/user', require("./routes/user"))
app.use('/admin', require('./routes/admin'))

const { decodeToken } = require("./service/jwt")
const { addTravel, removeTravel, editTravel } = require("./db/travel")

app.put('/admin/dashboard/travel', async (req, res) => { //
  try {

    const { travel_id, source, destination, cost } = req.body

    const token = req.headers.token
    const admin_id = decodeToken(token).id
    if (!admin_id) {
      res.status(400).json({ success: false, error: "id is not identify" })
    }

    const rowCountEffected = await editTravel(travel_id, source, destination, cost)
    if (rowCountEffected == 0) {
      res.status(400).json({ success: false, message: "travel didint edit ! " })
    }
    else {
      res.status(200).json({ success: true, message: "travel edited !" })
    }

  } catch (error) {
    console.log(error);
    res.json({ success: false, error })
  }
}
)


app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})