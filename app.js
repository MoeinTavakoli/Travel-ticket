const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require("./db/connection")

const { decodeToken } = require("./service/jwt")
const { addRequest, idValidation } = require("./db/request")


app.use('/user', require("./routes/user"))
app.use('/admin', require('./routes/admin'))


app.post("/user/dashboard/request", async (req, res) => {
  try {
    const token = req.headers.token
    const id = decodeToken(token).id
    const { source, destination } = req.body //, date

    // bere toye middleware 
    if (!id) {
      res.status(400).json({ success: false, error: " id not found !" })
    }

    if (!(await idValidation(id, "user"))) {
      res.status(400).json({ success: false, error: " user not found " })
    }
    // bere to middleware

    await addRequest(id, source, destination)
    res.status(200).json({ success: true, message: "request accepted !" })

  }
  catch (error) {
    res.json({ success: false, error })
  }

})






app.listen(port = 3000, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})