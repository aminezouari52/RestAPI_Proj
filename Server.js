const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()

//Connect to database
const DB = process.env.DBURI

const connectDb = async () => {
  try {
    await mongoose.connect(DB)
    console.log("sucess")
  } catch (error) {
    console.log(error)
  }
}
connectDb()

//mongoose Schema
const user = require("./models/User")
const router = express.Router()
router.get("/find", async (req, res) => {
  try {
    const showall = await user.find()

    res.status(200).send(showall)
  } catch (error) {
    res.status(404)
  }
})

// njarreb fi haja (its zva)

//Lunch a server
const port = process.env._PORT || 3000
const server = app.listen(port, () =>
  console.log(`app running on Port  ${port}`)
)
