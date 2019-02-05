const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const fileUpload = require('express-fileupload');
const cors = require("cors")

const startConnection = require("./db")

const workoutsRoutes = require("./workouts/workouts")
const exercisesRoutes = require("./exercises/exercises")

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())
app.use(cors(corsOptions))
app.use(express.static(__dirname + '/public'))
app.use(fileUpload())

app.use("/workouts", workoutsRoutes)
app.use("/exercises", exercisesRoutes)

app.listen(5000, function () {
  console.log("Server is running..")
  startConnection()
})
