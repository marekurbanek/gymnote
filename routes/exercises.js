const express = require('express')
const Exercise = require('../models/exercise.js')
const auth = require("../authentication/authentication")

const router = express.Router({
  mergeParams: true
})

router.post('/', auth.verify, (req, res) => {
  Exercise.create({name: req.body.name, workoutId: req.body.workoutId})
  .then((exercise) => {
    res.json(exercise)
  })
  .catch(err => {
    console.log(err)
  })
})

module.exports = router
