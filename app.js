const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const workoutsRoutes = require("./routes/workouts")
const exercisesRoutes = require("./routes/exercises")
const setsRoutes = require("./routes/sets")
const usersRoutes = require("./routes/users")

const db = require('./db')

const Workout = require('./models/workout')
const Exercise = require("./models/exercise")
const Run = require("./models/run")
const User = require("./models/user")

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

app.use("/workouts", workoutsRoutes)
app.use("/exercises", exercisesRoutes)
app.use("/sets", setsRoutes)
app.use("/users", usersRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
  console.log("Server is running..")
  Exercise.hasMany(Run)
  Workout.hasMany(Exercise)
  User.hasMany(Workout)
  db.sync()
  console.log("PORT")
  console.log(process.env.PORT)
  console.log("Is  Production ??")
  console.log(process.env.NODE_ENV)
})
